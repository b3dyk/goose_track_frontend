import moment from 'moment';
import 'moment/locale/uk';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { CalendarMonitor } from '../CalendarPage/CalendarMonitor/CalendarMonitor';
import * as SC from './CurrentDayPage.styled';
import { TaskModal } from '../../components/TaskModal';
import { useNavigate } from 'react-router-dom';
import { ITaskToEdit } from '../../helpers/interfaces/taskApiInterface/taskApiInterface';

export const CurrentDayPage = () => {
  const { current } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const lang = localStorage.getItem('i18nextLng');

  // Fake Modal Data ---------------------
  // const TEMP_MODAL_DATA = {};
  const TEMP_STATUS = 'todo';
  const TEMP_MODAL_DATA: ITaskToEdit = {
    title: { [lang as string]: 'text' },
    start: '13:00',
    end: '13:13',
    date: 'data from back',
    status: TEMP_STATUS,
    priority: 'high',
  };
  // Fake Modal Data ---------------------

  moment.updateLocale('en', { day: { dow: 1 } });
  moment.locale(t(`lang`)!);

  const [today, setToday] = useState(moment(current));
  const [selectedDay, setSelectedDay] = useState(moment(current));

  const [isOpenModal, setIsOpenModal] = useState(false);

  const totalDays = 7;
  const startDay = today.clone().startOf('isoWeek');
  const day = startDay.clone().subtract(1, 'day');
  const daysArray = [...Array(totalDays)].map(() => day.add(1, 'day').clone());

  const prevHandler = () => {
    const prevDay = today.clone().subtract(1, 'day');
    if (prevDay.isBefore(startDay)) {
      setSelectedDay(startDay);
      setToday(startDay);
      navigate(`/user/day/${startDay.format('YYYY-MM-DD')}`);
    } else {
      setSelectedDay(prevDay);
      setToday(prevDay);
      navigate(`/user/day/${prevDay.format('YYYY-MM-DD')}`);
    }
  };

  const nextHandler = () => {
    const nextDay = today.clone().add(1, 'day');
    if (nextDay.isAfter(startDay.clone().add(6, 'day'))) {
      setSelectedDay(startDay.clone().add(6, 'day'));
      setToday(startDay.clone().add(6, 'day'));
      navigate(
        `/user/day/${startDay.clone().add(6, 'day').format('YYYY-MM-DD')}`
      );
    } else {
      setToday(nextDay);
      setSelectedDay(nextDay);
      navigate(`/user/day/${nextDay.format('YYYY-MM-DD')}`);
    }
  };

  const todayHandler = () => {
    setSelectedDay(moment());
    setToday(moment());
    navigate(`/user/day/${moment().format('YYYY-MM-DD')}`);
  };
  const isCurrentDay = (day: moment.Moment): boolean => {
    return selectedDay.isSame(day, 'day');
  };

  const toggleModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  const modalData = Object.keys(TEMP_MODAL_DATA).length
    ? TEMP_MODAL_DATA
    : null;
  return (
    <main style={{ width: '1151px' }}>
      <SC.PageWrapper>
        <CalendarMonitor
          prevHandler={prevHandler}
          nextHandler={nextHandler}
          todayHandler={todayHandler}
          today={today}
          currentDay={true}
        />
        <SC.WeekAndDayWrapper>
          <SC.WeekWrapper>
            {daysArray.map((dayItem, idx) => (
              <SC.DayOfWeek key={idx}>
                {dayItem.format('ddd').toUpperCase()}
              </SC.DayOfWeek>
            ))}
          </SC.WeekWrapper>
          <SC.DaysWrapper>
            {daysArray.map(dayItem => (
              <div key={dayItem.format('DDMMYY')}>
                <SC.CellWrapper>
                  {isCurrentDay(dayItem) ? (
                    <SC.CurrentDay>{dayItem.format('D')}</SC.CurrentDay>
                  ) : (
                    dayItem.format('D')
                  )}
                </SC.CellWrapper>
              </div>
            ))}
          </SC.DaysWrapper>
        </SC.WeekAndDayWrapper>
      </SC.PageWrapper>

      <button type="button" onClick={toggleModal}>
        Open modal
      </button>
      {isOpenModal && <TaskModal data={modalData} closeModal={toggleModal} />}
    </main>
  );
};
