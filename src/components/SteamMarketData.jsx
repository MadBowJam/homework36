// import React, { useState, useEffect } from 'react';
//
// const SteamMarketData = () => {
//   const [marketData, setMarketData] = useState({});
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const itemsToFetch = [
//     'Prisma Case',
//     'Fracture Case',
//     'Prisma 2 Case',
//     'Danger Zone Case',
//     'Clutch Case',
//     // 'Dreams & Nightmares Case',
//     'Snakebite Case',
//     'Revolution Case',
//     'Recoil Case',
//     'Sticker | Natus Vincere | Katowice 2019',
//     'Sticker | FaZe Clan | Katowice 2019',
//     '2020 RMR Legends',
//     '2020 RMR Challengers',
//     '2020 RMR Contenders',
//     'Stockholm 2021 Legends Sticker Capsule',
//     'Stockholm 2021 Challengers Sticker Capsule',
//     'Stockholm 2021 Contenders Sticker Capsule',
//     'Stockholm 2021 Champions Autograph Capsule',
//     'Stockholm 2021 Finalists Autograph Capsule',
//     'Stockholm 2021 Legends Patch Pack',
//     'Sticker | Natus Vincere | Stockholm 2021',
//     'Sticker | Natus Vincere (Holo) | Stockholm 2021',
//     'Patch | Natus Vincere | Stockholm 2021',
//     'Sticker | Gambit Gaming (Holo) | Stockholm 2021',
//     'Sticker | FURIA (Holo) | Stockholm 2021',
//     'Sticker | Vitality (Holo) | Stockholm 2021',
//     'Sticker | Ninjas in Pyjamas (Holo) | Stockholm 2021',
//     'Sticker | Team Liquid (Holo) | Stockholm 2021',
//     'Sticker | Team Liquid (Foil) | Stockholm 2021',
//     'Sticker | G2 Esports (Holo) | Stockholm 2021',
//     'Sticker | G2 Esports (Foil) | Stockholm 2021',
//     'Sticker | s1mple | Stockholm 2021',
//     'Sticker | s1mple (Holo) | Stockholm 2021',
//     'Antwerp 2022 Legends Sticker Capsule',
//     'Antwerp 2022 Challengers Sticker Capsule',
//     'Antwerp 2022 Contenders Sticker Capsule',
//     'Antwerp 2022 Legends Autograph Capsule',
//     'Antwerp 2022 Challengers Autograph Capsule',
//     'Antwerp 2022 Contenders Autograph Capsule',
//     'Antwerp 2022 Champions Autograph Capsule',
//     'Sticker | Natus Vincere | Antwerp 2022',
//     'Sticker | Cloud9 | Antwerp 2022',
//     'Sticker | Cloud9 (Glitter) | Antwerp 2022',
//     'Sticker | Cloud9 (Holo) | Antwerp 2022',
//     'Rio 2022 Legends Sticker Capsule',
//     'Rio 2022 Challengers Sticker Capsule',
//     'Rio 2022 Contenders Sticker Capsule',
//     'Rio 2022 Legends Autograph Capsule',
//     'Rio 2022 Challengers Autograph Capsule',
//     'Rio 2022 Contenders Autograph Capsule',
//     'Rio 2022 Champions Autograph Capsule',
//     'Paris 2023 Legends Sticker Capsule',
//     'Paris 2023 Challengers Sticker Capsule',
//     'Paris 2023 Contenders Sticker Capsule',
//     'Paris 2023 Legends Autograph Capsule',
//     'Paris 2023 Challengers Autograph Capsule',
//     'Paris 2023 Contenders Autograph Capsule',
//     'Paris 2023 Champions Autograph Capsule',
//     'Sticker | Natus Vincere (Gold) | Paris 2023',
//   ];
//
//   useEffect(() => {
//     const fetchDataWithInterval = async () => {
//       try {
//         const apiUrl = `https://steamcommunity.com/market/priceoverview/?&currency=1&appid=730&market_hash_name=${itemsToFetch[currentIndex]}`;
//         const response = await fetch(apiUrl);
//         if (!response.ok) {
//           throw new Error(`Failed to fetch data for ${itemsToFetch[currentIndex]}`);
//         }
//         const jsonData = await response.json();
//         setMarketData(prevData => ({
//           ...prevData,
//           [itemsToFetch[currentIndex]]: jsonData
//         }));
//         setCurrentIndex(prevIndex => (prevIndex + 1) % itemsToFetch.length); // Оновити індекс
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };
//
//     const intervalId = setInterval(fetchDataWithInterval, 5000); // Запускаємо функцію з інтервалом 5 секунд
//
//     return () => clearInterval(intervalId); // Прибираємо інтервал після знищення компонента
//   }, [itemsToFetch]); // Зміна масива itemsToFetch приведе до перезапуску ефекту
//
//   return (
//     <div>
//       {Object.keys(marketData).map((itemName, index) => (
//         <div key={index}>
//           <h2>{itemName}</h2>
//           <pre>{JSON.stringify(marketData[itemName], null, 2)}</pre>
//         </div>
//       ))}
//     </div>
//   );
// };
//
// export default SteamMarketData;