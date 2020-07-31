import moment from 'moment';

moment.locale('ko');

moment.updateLocale('ko', {
    // 시간 비교 텍스트
    relativeTime: {
        future: 'in %s',
        past: '%s 전',
        s: '몇초',
        ss: '%d초',
        m: '1분',
        mm: '%d분',
        h: '한시간',
        hh: '%d시간',
        d: '하루',
        dd: '%d일',
        w: '일주일',
        M: '한달',
        MM: '%d달',
        y: '일년',
        yy: '%d년'
    },
    // 요일 텍스트
    weekdays: [
        '일요일',
        '월요일',
        '화요일',
        '수요일',
        '목요일',
        '금요일',
        '토요일'
    ],
    // 오전 / 오후 텍스트
    meridiem: (hour) => (hour < 12 ? '오전' : '오후')
});
