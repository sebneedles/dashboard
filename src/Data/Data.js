import {
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
  UilChart,
  UilMoneyWithdrawal,
  UilUsdSquare,
  UilDashboard,
} from '@iconscout/react-unicons';
import img1 from '../imgs/img1.png';
import img2 from '../imgs/img2.png';
import img3 from '../imgs/img3.png';

/* ******************************************************
SIDEBAR DATA
****************************************************** */
export const SidebarData = [
  {
    icon: UilDashboard,
    heading: 'Dashboard',
  },
  {
    icon: UilClipboardAlt,
    heading: 'Orders',
  },
  {
    icon: UilUsersAlt,
    heading: 'Customers',
  },
  {
    icon: UilPackage,
    heading: 'Products',
  },
  {
    icon: UilChart,
    heading: 'Analytics',
  },
];

/* ******************************************************
CARDS DATA
****************************************************** */
export const CardsData = [
  {
    title: 'Sales',
    color: {
      backGround: 'var(--first-color)',
      boxShadow: '0px 2px 10px 0px var(--first-color)',
      backGround2: 'white',
    },
    barValue: 70,
    value: '25,970',
    png: UilUsdSquare,
    series: [
      {
        name: 'Sales',
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
  {
    title: 'Revenue',
    color: {
      backGround: 'var(--fifth-color)',
      boxShadow: '0px 2px 10px 0px var(--fifth-color)',
      backGround2: 'white',
    },
    barValue: 80,
    value: '14,270',
    png: UilMoneyWithdrawal,
    series: [
      {
        name: 'Revenue',
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
  },
  {
    title: 'Expenses',
    color: {
      backGround: 'var(--third-color)',
      boxShadow: '0px 2px 10px 0px var(--third-color)',
      backGround2: 'white',
    },
    barValue: 60,
    value: '4,270',
    png: UilClipboardAlt,
    series: [
      {
        name: 'Expenses',
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
];

/* ******************************************************
UPDATES DATA
****************************************************** */
export const UpdatesData = [
  {
    img: img1,
    name: 'Andrews Thomas',
    noti: 'has ordered Apple smart watch 2500mh battery.',
    time: '25 seconds ago',
  },
  {
    img: img2,
    name: 'James Bond',
    noti: 'has received Samsung gadget for charging battery.',
    time: '30 minutes ago',
  },
  {
    img: img3,
    name: 'Iron Man',
    noti: 'has ordered Apple smart watch, Samsung Gear 2500mh battery..',
    time: '2 hours ago',
  },
];

/* ******************************************************
ORDERS DATA
****************************************************** */
export const OrdersData = [
  {
    product: 'Lasania Chicken Fri',
    trackingId: 18908421,
    date: '2 March 2022',
    status: 'Approved',
  },
  {
    product: 'Big Baza Bang',
    trackingId: 18908422,
    date: '2 March 2022',
    status: 'Pending',
  },
  {
    product: 'Mouth Freshner',
    trackingId: 18908423,
    date: '2 March 2022',
    status: 'Approved',
  },
  {
    product: 'Cupcake',
    trackingId: 18908424,
    date: '2 March 2022',
    status: 'Delivered',
  },
  {
    product: 'Cheesecake',
    trackingId: 18908425,
    date: '2 March 2022',
    status: 'Delivered',
  },
];
