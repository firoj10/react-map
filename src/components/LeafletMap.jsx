
import { useEffect,  useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './../../public/log.png'
import bagdachingri from './../../public/location-img/bagdachingri.jpg'
import boguradoi from './../../public/location-img/boguradoi.jpg'
import katarivog from './../../public/location-img/katarivog.jpg'
import kejurgur from './../../public/location-img/kejurgur.jpg'
import kumillahro from './../../public/location-img/kumillahro.jpg'
import natorkacha from './../../public/location-img/natorkacha gollah.jpg'
import chomcom from './../../public/location-img/chomcom.jpg'
import sadamati from './../../public/location-img/sadamati.jpg'
import tulcimadan from './../../public/location-img/tulcimadan.jpg'
import siletsitolpati from './../../public/location-img/siletsitolpati.jpg'
import sotoronji from './../../public/location-img/sotoronji.jpg'



import "./map.css";

function LeafletMap() {


  const [geojsonData, setGeojsonData] = useState(null);

  useEffect(() => {
      const fetchData = async () => {
          const response = await fetch('/../public/district-data/bangladesh.json');
          const data = await response.json();
          setGeojsonData(data);
      };

      fetchData();
  }, []);
 
// open-and-close 
const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768); 
  const [legendOpen, setLegendOpen] = useState(false); 



  
  const toggleLegend = () => {
    setLegendOpen(!legendOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      const isDesktop = window.innerWidth > 768;
      setIsDesktop(isDesktop);
     

    };

    window.addEventListener('resize', handleResize);

    if (isDesktop) {
      setLegendOpen(true);
    } else {
      setLegendOpen(false);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isDesktop]);

// Zoom effect add....................................................................

// const isDesktops = useMediaQuery('(m-width: 768px)');
// const [zoomLevel, setZoomLevel] = useState(isDesktops ? 7 : 5);

// useEffect(() => {
//   setZoomLevel(isDesktops ? 7 : 5);
// }, [isDesktops]); 





  const products = [
        { district: '	ঢাকা', name: 'জামদানি শাড়ি', webLink: '#' },
        { district: 'বাংলাদেশ', name: 'ইলিশ', webLink: '#' },
        { district: 'চাঁপাইনবাবগঞ্জ', name: 'খিরসাপাত আম', webLink: '#' },
        { district: 'ঢাকা', name: 'মসলিন শাড়ি', webLink: '#' },
        { district: 'রাজশাহী', name: 'রাজশাহী সিল্ক', webLink: '#' },
        { district: 'রংপুর', name: 'শতরঞ্জি বা হস্তশিল্প', webLink: '#' },
        { district: 'বাংলাদেশ', name: 'কালিজিরা চাল', webLink: '#' },
        { district: 'দিনাজপুরের', name: 'দিনাজপুরের কাঁটারিভোগ', webLink: '#' },
        { district: 'নেত্রকোণা', name: ' সাদামাটি', webLink: '#' },
        { district: 'খুলনা', name: 'বাগদা চিংড়ি', webLink: '#' },
        { district: 'রাজশাহী,', name: ' ফজলি আম', webLink: '#' },
        { district: 'বগুড়া', name: 'বগুড়ার দই', webLink: '#' },
        { district: '	শেরপুর', name: 'শেরপুরের তুলসী মালা ধান', webLink: '#' },
        { district: 'চাঁপাইনবাবগঞ্জ', name: 'চাঁপাইনবাবগঞ্জের আশ্বিনা আম', webLink: '#' },
        { district: 'চাঁপাইনবাবগঞ্জ', name: 'চাঁপাইনবাবগঞ্জের ল্যাংডা আম', webLink: '#' },
        { district: 'সিলেট', name: 'সিলেটের শীতল পাটি', webLink: '#' },
        { district: 'নাটোর', name: 'নাটোরের কাঁচা গোল্লা', webLink: '#' },
        { district: 'টাংগাইল', name: 'টাংগাইলের চমচম', webLink: '#' },
        { district: 'কুমিল্লা ', name: 'কুমিল্লার রসমালাই', webLink: '#' },
        { district: 'কুষ্টিয়া', name: 'কুষ্টিয়ার তিলের খাজা', webLink: '#' },
        { district: 'বাংলাদেশ', name: 'বাংলাদেশের ব্ল্যাক বেঙ্গল ছাগল', webLink: '#' },
        { district: 'যশোর', name: 'যশোরের খেজুরের গুড', webLink: '#' },
      ];


    const locations = [

    {
      position: [23.8103, 90.4125], name: 'জামদানি শাড়ি', district: 'ঢাকা', description: 'জামদানি হল কার্পাস তুলা দিয়ে প্রস্তুতকৃত একধরনের পরিধেয় বস্ত্র যার বয়ন পদ্ধতি অনন্য। জামদানি বুননকালে তৃতীয় একটি সুতা দিয়ে নকশা ফুটিয়ে তোলা হয়। মসলিন বয়নে যেমন ন্যূনপক্ষে ৩০০ কাউন্টের সুতা ব্যবহার করা হয়, ', img: "//upload.wikimedia.org/wikipedia/commons/thumb/1/19/Making_of_Jamdani-9.jpg/200px-Making_of_Jamdani-9.jpg"
    },

    { position: [24.3745, 88.6042], name: 'রাজশাহী সিল্ক', district: 'রাজশাহী', description: 'রাজশাহীর সিল্ক   নামটি  দেয়া  হয়েছে কারণ রাজশাহী,বাংলাদেশ এর রেশম তন্তু দিয়ে এটি উৎপন্ন । এটি একটি জনপ্রিয় একটি নাম , বিশেষ করে শাড়িতে রাজশাহীর সিল্ক অনেক সুক্ষ এবং নরম মোলায়েম আঁশ।  আঁশের ', img: "//upload.wikimedia.org/wikipedia/commons/thumb/9/96/Rajshahi_silk_%281%29.jpg/220px-Rajshahi_silk_%281%29.jpg" },
    { position: [24.5998, 88.2750], name: 'খিরসাপাত আম', district: 'চাঁপাইনবাবগঞ্জ', description: 'খিরসাপাত/খিরশাপাত/ক্ষিরশাপাত/ক্ষীরশাপাত আম, উন্নতজাতের আমের মধ্যে অন্যতম। জুন মাসের শুরু থেকেই এই আম পাকতে শুরু করে। আমটি আকারে গোলাকার আকৃতিতে মাঝারি। আমটি লম্বায় প্রায় ৮ সে.মি., ', img: "//upload.wikimedia.org/wikipedia/commons/thumb/1/1d/%E0%A6%9A%E0%A6%BE%E0%A6%81%E0%A6%AA%E0%A6%BE%E0%A6%87%E0%A6%A8%E0%A6%AC%E0%A6%BE%E0%A6%AC%E0%A6%97%E0%A6%9E%E0%A7%8D%E0%A6%9C_%E0%A6%8F%E0%A6%B0_%E0%A6%96%E0%A6%BF%E0%A6%B0%E0%A6%B8%E0%A6%BE%E0%A6%AA%E0%A6%BE%E0%A6%A4_%E0%A6%86%E0%A6%AE.jpg/220px-%E0%A6%9A%E0%A6%BE%E0%A6%81%E0%A6%AA%E0%A6%BE%E0%A6%87%E0%A6%A8%E0%A6%AC%E0%A6%BE%E0%A6%AC%E0%A6%97%E0%A6%9E%E0%A7%8D%E0%A6%9C_%E0%A6%8F%E0%A6%B0_%E0%A6%96%E0%A6%BF%E0%A6%B0%E0%A6%B8%E0%A6%BE%E0%A6%AA%E0%A6%BE%E0%A6%A4_%E0%A6%86%E0%A6%AE.jpg" },
    { position: [25.7500, 89.2500], name: 'শতরঞ্জি বা হস্তশিল্প', district: 'রংপুর', description: 'জামদানি হল কার্পাস তুলা দিয়ে প্রস্তুতকৃত একধরনের পরিধেয় বস্ত্র যার বয়ন পদ্ধতি অনন্য। জামদানি বুননকালে তৃতীয় একটি সুতা দিয়ে নকশা ফুটিয়ে তোলা হয়। মসলিন বয়নে যেমন ন্যূনপক্ষে ৩০০ কাউন্টের সুত', img: sotoronji },
    { position: [25.6275, 88.6376],  name: 'দিনাজপুরের কাঁটারিভোগ', district: 'দিনাজপুরের', description: 'জামদানি হল কার্পাস তুলা দিয়ে প্রস্তুতকৃত একধরনের পরিধেয় বস্ত্র যার বয়ন পদ্ধতি অনন্য। জামদানি বুননকালে তৃতীয় একটি সুতা দিয়ে নকশা ফুটিয়ে তোলা হয়। মসলিন বয়নে যেমন ন্যূনপক্ষে ৩০০ কাউন্টের সুত', img: katarivog },
    { position: [24.8700, 90.7296],  name: ' সাদামাটি', district: 'নেত্রকোণা', description: 'জামদানি হল কার্পাস তুলা দিয়ে প্রস্তুতকৃত একধরনের পরিধেয় বস্ত্র যার বয়ন পদ্ধতি অনন্য। জামদানি বুননকালে তৃতীয় একটি সুতা দিয়ে নকশা ফুটিয়ে তোলা হয়। মসলিন বয়নে যেমন ন্যূনপক্ষে ৩০০ কাউন্টের সুত', img: sadamati },
    { position: [22.8456, 89.5403], name: 'বাগদা চিংড়ি', district: 'খুলনা', description: 'জামদানি হল কার্পাস তুলা দিয়ে প্রস্তুতকৃত একধরনের পরিধেয় বস্ত্র যার বয়ন পদ্ধতি অনন্য। জামদানি বুননকালে তৃতীয় একটি সুতা দিয়ে নকশা ফুটিয়ে তোলা হয়। মসলিন বয়নে যেমন ন্যূনপক্ষে ৩০০ কাউন্টের সুত', img: bagdachingri },
    { position: [24.8466, 89.3723], name: 'বগুড়ার দই', district: 'বগুড়া', description: 'জামদানি হল কার্পাস তুলা দিয়ে প্রস্তুতকৃত একধরনের পরিধেয় বস্ত্র যার বয়ন পদ্ধতি অনন্য। জামদানি বুননকালে তৃতীয় একটি সুতা দিয়ে নকশা ফুটিয়ে তোলা হয়। মসলিন বয়নে যেমন ন্যূনপক্ষে ৩০০ কাউন্টের সুত', img: boguradoi },
    { position: [25.0189, 90.0172], name: 'শেরপুরের তুলসী মালা ধান', district: 'শেরপুর', description: 'জামদানি হল কার্পাস তুলা দিয়ে প্রস্তুতকৃত একধরনের পরিধেয় বস্ত্র যার বয়ন পদ্ধতি অনন্য। জামদানি বুননকালে তৃতীয় একটি সুতা দিয়ে নকশা ফুটিয়ে তোলা হয়। মসলিন বয়নে যেমন ন্যূনপক্ষে ৩০০ কাউন্টের সুত', img: tulcimadan },
    { position: [24.8955, 91.8687], name: 'সিলেটের শীতল পাটি', district: 'সিলেট', description: 'জামদানি হল কার্পাস তুলা দিয়ে প্রস্তুতকৃত একধরনের পরিধেয় বস্ত্র যার বয়ন পদ্ধতি অনন্য। জামদানি বুননকালে তৃতীয় একটি সুতা দিয়ে নকশা ফুটিয়ে তোলা হয়। মসলিন বয়নে যেমন ন্যূনপক্ষে ৩০০ কাউন্টের সুত', img: siletsitolpati },
    { position: [24.4071, 88.9610], name: 'নাটোরের কাঁচা গোল্লা', district: 'নাটোর', description: 'জামদানি হল কার্পাস তুলা দিয়ে প্রস্তুতকৃত একধরনের পরিধেয় বস্ত্র যার বয়ন পদ্ধতি অনন্য। জামদানি বুননকালে তৃতীয় একটি সুতা দিয়ে নকশা ফুটিয়ে তোলা হয়। মসলিন বয়নে যেমন ন্যূনপক্ষে ৩০০ কাউন্টের সুত', img: natorkacha },
    { position: [24.3927, 89.9158], name: 'টাংগাইলের চমচম', district: 'টাংগাইল', description: 'জামদানি হল কার্পাস তুলা দিয়ে প্রস্তুতকৃত একধরনের পরিধেয় বস্ত্র যার বয়ন পদ্ধতি অনন্য। জামদানি বুননকালে তৃতীয় একটি সুতা দিয়ে নকশা ফুটিয়ে তোলা হয়। মসলিন বয়নে যেমন ন্যূনপক্ষে ৩০০ কাউন্টের সুত', img: chomcom },

    { position: [23.9013, 89.1205], name: 'কুষ্টিয়ার তিলের খাজা', district: 'কুষ্টিয়া', description: 'জামদানি হল কার্পাস তুলা দিয়ে প্রস্তুতকৃত একধরনের পরিধেয় বস্ত্র যার বয়ন পদ্ধতি অনন্য। জামদানি বুননকালে তৃতীয় একটি সুতা দিয়ে নকশা ফুটিয়ে তোলা হয়। মসলিন বয়নে যেমন ন্যূনপক্ষে ৩০০ কাউন্টের সুত', img: kumillahro },
    { position: [23.1664, 89.2089], name: 'যশোরের খেজুরের গুড', district: 'যশোর',description: 'জামদানি হল কার্পাস তুলা দিয়ে প্রস্তুতকৃত একধরনের পরিধেয় বস্ত্র যার বয়ন পদ্ধতি অনন্য। জামদানি বুননকালে তৃতীয় একটি সুতা দিয়ে নকশা ফুটিয়ে তোলা হয়। মসলিন বয়নে যেমন ন্যূনপক্ষে ৩০০ কাউন্টের সুত',img: kejurgur }
  ];
  return (
    <div className="map-containeree">
      <div className="header " style={{zIndex:999}}>
        <div className="card" style={{backgroundColor:"white", color:'blue', border:'none'}}>
          <div className="row" style={{alignItems:'center'}}>
            <div className="col-12 col-md-3" style={{alignItems:'center'}}>
              <img src={logo} alt="" width={200} height={90} />
            </div>
            <div className="col-12 col-md-9 " style={{alignItems:'center', textAlign:'right', color: 'blue'}}>
          
            <h4 className='pe-2'>বাংলাদেশের নির্দেশিত সকল ভৌগোলিক নির্দেশক লিস্ট</h4>
         
            </div>
          </div>
        </div>
      </div>
      <div className={`map_legend_infosee ${legendOpen ? 'open' : 'closed'}`}>
        <div id="map_data_infos" style={{ maxHeight: '310px', overflow: 'auto' }}>
          <div className='close-btn'>
          {isDesktop && (
        <div className='show-btn'>
          <button onClick={toggleLegend}>{legendOpen ? "Hide List" : "Show List"}</button>
        </div>
      )}

      {!isDesktop && (
        <div className='show-btn'>
          <button onClick={() => setLegendOpen(!legendOpen)}>
            {legendOpen ? "Hide List" : "Show List"}
          </button>
        </div>
      )}

      {/* {isMobile && !legendOpen && (
        <div className='show-btn'>
          <button onClick={() => setLegendOpen(true)}>Show List</button>
        </div>
      )} */}
          </div>
          {legendOpen && (
        <table className="table table-striped table-hover">
          <thead className='sticky-top'>
            <tr>
              <th className='table-top-title'>ভৌগোলিক নিদর্শন</th>
              <th className='table-top-title'>জেলা/অঞ্চল</th>
              <th className='table-top-title'>ওয়েবসাইট </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index}>
                <td style={{ paddingLeft: '8px', textAlign: 'left' }}>
                  <span className='table-title'>{product.name}</span>
                </td>
                <td style={{ paddingLeft: '8px', textAlign: 'left' }}>
                  <span className='table-title'>{product.district}</span>
                </td>
                <td style={{ paddingRight: '8px', textAlign: 'right' }}>
                  <span className='table-title'>
                    <a href={product.webLink}> পরিদর্শন</a>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
     
        </div>
     
      </div>
      <div className="map"></div>
      <MapContainer center={[23.685, 90.3563]} zoom={7}  style={{ height: '100vh', backgroundColor: 'lightblue' }}  >
          <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {geojsonData && <GeoJSON data={geojsonData}  style={{ color: '#EE4266',  }}/>}
          {locations.map((location, index) => (
    <Marker key={index} position={location.position}>
      <Popup style={{zIndex:'4'}}>
        <div className=''>
          <p><img alt={location.name} src={location.img} decoding="async" width="293" height="193" /></p>
          
          <div className='d-flex'>
          <h6 className='fw-bold'>{location.name }</h6><span className='px-2'>({location.district}) </span>
          </div>
          <p>{location.description}</p>
          <h6 className='fw-bold'> তালিকা</h6>
           <ul>
             <li>বাগদা চিংড়ি</li>
             <li>ফজলি আম</li>
             <li>খিরসাপাতি</li>
             <li>ইলিশ</li>
           </ul> 
           <div className='text-center fw-bold'>
            <a href="">  ওয়েবসাইট পরিদর্শন</a>
           </div>
        </div>
      </Popup>
    </Marker>
  ))}
      </MapContainer>
      </div>
//     </div>
  );
}

export default LeafletMap;

// import { useEffect, useState } from 'react';
// import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from 'react-leaflet';
// import "leaflet/dist/leaflet.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import logo from './../../public/log.png'
// import bagdachingri from './../../public/location-img/bagdachingri.jpg'
// import boguradoi from './../../public/location-img/boguradoi.jpg'
// import katarivog from './../../public/location-img/katarivog.jpg'
// import kejurgur from './../../public/location-img/kejurgur.jpg'
// import kumillahro from './../../public/location-img/kumillahro.jpg'
// import natorkacha from './../../public/location-img/natorkacha gollah.jpg'
// import chomcom from './../../public/location-img/chomcom.jpg'
// import sadamati from './../../public/location-img/sadamati.jpg'
// import tulcimadan from './../../public/location-img/tulcimadan.jpg'
// import siletsitolpati from './../../public/location-img/siletsitolpati.jpg'
// import sotoronji from './../../public/location-img/sotoronji.jpg'



// import "./map.css";

// function LeafletMap() {

//   const [geojsonData, setGeojsonData] = useState(null);

//   useEffect(() => {
//       const fetchData = async () => {
//           const response = await fetch('/../public/district-data/bangladesh.json');
//           const data = await response.json();
//           setGeojsonData(data);
//       };

//       fetchData();
//   }, []);
 
// // open-and-close 
// const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768); // Assuming 768px is the breakpoint for desktop
// const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Assuming 768px is the breakpoint for mobile
// const [legendOpen, setLegendOpen] = useState(isDesktop); // Table list is initially open on desktop, closed on mobile

// const toggleLegend = () => {
//   setLegendOpen(!legendOpen);
// };

// useEffect(() => {
//   const handleResize = () => {
//     setIsDesktop(window.innerWidth > 768); // Update isDesktop state based on window width
//     setIsMobile(window.innerWidth <= 768); // Update isMobile state based on window width
//   };

//   window.addEventListener('resize', handleResize);

//   return () => {
//     window.removeEventListener('resize', handleResize);
//   };
// }, [legendOpen]);

//   const products = [
//         { district: '	ঢাকা', name: 'জামদানি শাড়ি', webLink: '#' },
//         { district: 'বাংলাদেশ', name: 'ইলিশ', webLink: '#' },
//         { district: 'চাঁপাইনবাবগঞ্জ', name: 'খিরসাপাত আম', webLink: '#' },
//         { district: 'ঢাকা', name: 'মসলিন শাড়ি', webLink: '#' },
//         { district: 'রাজশাহী', name: 'রাজশাহী সিল্ক', webLink: '#' },
//         { district: 'রংপুর', name: 'শতরঞ্জি বা হস্তশিল্প', webLink: '#' },
//         { district: 'বাংলাদেশ', name: 'কালিজিরা চাল', webLink: '#' },
//         { district: 'দিনাজপুরের', name: 'দিনাজপুরের কাঁটারিভোগ', webLink: '#' },
//         { district: 'নেত্রকোণা', name: ' সাদামাটি', webLink: '#' },
//         { district: 'খুলনা', name: 'বাগদা চিংড়ি', webLink: '#' },
//         { district: 'রাজশাহী,', name: ' ফজলি আম', webLink: '#' },
//         { district: 'বগুড়া', name: 'বগুড়ার দই', webLink: '#' },
//         { district: '	শেরপুর', name: 'শেরপুরের তুলসী মালা ধান', webLink: '#' },
//         { district: 'চাঁপাইনবাবগঞ্জ', name: 'চাঁপাইনবাবগঞ্জের আশ্বিনা আম', webLink: '#' },
//         { district: 'চাঁপাইনবাবগঞ্জ', name: 'চাঁপাইনবাবগঞ্জের ল্যাংডা আম', webLink: '#' },
//         { district: 'সিলেট', name: 'সিলেটের শীতল পাটি', webLink: '#' },
//         { district: 'নাটোর', name: 'নাটোরের কাঁচা গোল্লা', webLink: '#' },
//         { district: 'টাংগাইল', name: 'টাংগাইলের চমচম', webLink: '#' },
//         { district: 'কুমিল্লা ', name: 'কুমিল্লার রসমালাই', webLink: '#' },
//         { district: 'কুষ্টিয়া', name: 'কুষ্টিয়ার তিলের খাজা', webLink: '#' },
//         { district: 'বাংলাদেশ', name: 'বাংলাদেশের ব্ল্যাক বেঙ্গল ছাগল', webLink: '#' },
//         { district: 'যশোর', name: 'যশোরের খেজুরের গুড', webLink: '#' },
//       ];


//     const locations = [

//     {
//       position: [23.8103, 90.4125], name: 'জামদানি শাড়ি', district: 'ঢাকা', description: 'জামদানি হল কার্পাস তুলা দিয়ে প্রস্তুতকৃত একধরনের পরিধেয় বস্ত্র যার বয়ন পদ্ধতি অনন্য। জামদানি বুননকালে তৃতীয় একটি সুতা দিয়ে নকশা ফুটিয়ে তোলা হয়। মসলিন বয়নে যেমন ন্যূনপক্ষে ৩০০ কাউন্টের সুতা ব্যবহার করা হয়, ', img: "//upload.wikimedia.org/wikipedia/commons/thumb/1/19/Making_of_Jamdani-9.jpg/200px-Making_of_Jamdani-9.jpg"
//     },

//     { position: [24.3745, 88.6042], name: 'রাজশাহী সিল্ক', district: 'রাজশাহী', description: 'রাজশাহীর সিল্ক   নামটি  দেয়া  হয়েছে কারণ রাজশাহী,বাংলাদেশ এর রেশম তন্তু দিয়ে এটি উৎপন্ন । এটি একটি জনপ্রিয় একটি নাম , বিশেষ করে শাড়িতে রাজশাহীর সিল্ক অনেক সুক্ষ এবং নরম মোলায়েম আঁশ।  আঁশের ', img: "//upload.wikimedia.org/wikipedia/commons/thumb/9/96/Rajshahi_silk_%281%29.jpg/220px-Rajshahi_silk_%281%29.jpg" },
//     { position: [24.5998, 88.2750], name: 'খিরসাপাত আম', district: 'চাঁপাইনবাবগঞ্জ', description: 'খিরসাপাত/খিরশাপাত/ক্ষিরশাপাত/ক্ষীরশাপাত আম, উন্নতজাতের আমের মধ্যে অন্যতম। জুন মাসের শুরু থেকেই এই আম পাকতে শুরু করে। আমটি আকারে গোলাকার আকৃতিতে মাঝারি। আমটি লম্বায় প্রায় ৮ সে.মি., ', img: "//upload.wikimedia.org/wikipedia/commons/thumb/1/1d/%E0%A6%9A%E0%A6%BE%E0%A6%81%E0%A6%AA%E0%A6%BE%E0%A6%87%E0%A6%A8%E0%A6%AC%E0%A6%BE%E0%A6%AC%E0%A6%97%E0%A6%9E%E0%A7%8D%E0%A6%9C_%E0%A6%8F%E0%A6%B0_%E0%A6%96%E0%A6%BF%E0%A6%B0%E0%A6%B8%E0%A6%BE%E0%A6%AA%E0%A6%BE%E0%A6%A4_%E0%A6%86%E0%A6%AE.jpg/220px-%E0%A6%9A%E0%A6%BE%E0%A6%81%E0%A6%AA%E0%A6%BE%E0%A6%87%E0%A6%A8%E0%A6%AC%E0%A6%BE%E0%A6%AC%E0%A6%97%E0%A6%9E%E0%A7%8D%E0%A6%9C_%E0%A6%8F%E0%A6%B0_%E0%A6%96%E0%A6%BF%E0%A6%B0%E0%A6%B8%E0%A6%BE%E0%A6%AA%E0%A6%BE%E0%A6%A4_%E0%A6%86%E0%A6%AE.jpg" },
//     { position: [25.7500, 89.2500], name: 'শতরঞ্জি বা হস্তশিল্প', district: 'রংপুর', description: 'জামদানি হল কার্পাস তুলা দিয়ে প্রস্তুতকৃত একধরনের পরিধেয় বস্ত্র যার বয়ন পদ্ধতি অনন্য। জামদানি বুননকালে তৃতীয় একটি সুতা দিয়ে নকশা ফুটিয়ে তোলা হয়। মসলিন বয়নে যেমন ন্যূনপক্ষে ৩০০ কাউন্টের সুত', img: sotoronji },
//     { position: [25.6275, 88.6376],  name: 'দিনাজপুরের কাঁটারিভোগ', district: 'দিনাজপুরের', description: 'জামদানি হল কার্পাস তুলা দিয়ে প্রস্তুতকৃত একধরনের পরিধেয় বস্ত্র যার বয়ন পদ্ধতি অনন্য। জামদানি বুননকালে তৃতীয় একটি সুতা দিয়ে নকশা ফুটিয়ে তোলা হয়। মসলিন বয়নে যেমন ন্যূনপক্ষে ৩০০ কাউন্টের সুত', img: katarivog },
//     { position: [24.8700, 90.7296],  name: ' সাদামাটি', district: 'নেত্রকোণা', description: 'জামদানি হল কার্পাস তুলা দিয়ে প্রস্তুতকৃত একধরনের পরিধেয় বস্ত্র যার বয়ন পদ্ধতি অনন্য। জামদানি বুননকালে তৃতীয় একটি সুতা দিয়ে নকশা ফুটিয়ে তোলা হয়। মসলিন বয়নে যেমন ন্যূনপক্ষে ৩০০ কাউন্টের সুত', img: sadamati },
//     { position: [22.8456, 89.5403], name: 'বাগদা চিংড়ি', district: 'খুলনা', description: 'জামদানি হল কার্পাস তুলা দিয়ে প্রস্তুতকৃত একধরনের পরিধেয় বস্ত্র যার বয়ন পদ্ধতি অনন্য। জামদানি বুননকালে তৃতীয় একটি সুতা দিয়ে নকশা ফুটিয়ে তোলা হয়। মসলিন বয়নে যেমন ন্যূনপক্ষে ৩০০ কাউন্টের সুত', img: bagdachingri },
//     { position: [24.8466, 89.3723], name: 'বগুড়ার দই', district: 'বগুড়া', description: 'জামদানি হল কার্পাস তুলা দিয়ে প্রস্তুতকৃত একধরনের পরিধেয় বস্ত্র যার বয়ন পদ্ধতি অনন্য। জামদানি বুননকালে তৃতীয় একটি সুতা দিয়ে নকশা ফুটিয়ে তোলা হয়। মসলিন বয়নে যেমন ন্যূনপক্ষে ৩০০ কাউন্টের সুত', img: boguradoi },
//     { position: [25.0189, 90.0172], name: 'শেরপুরের তুলসী মালা ধান', district: 'শেরপুর', description: 'জামদানি হল কার্পাস তুলা দিয়ে প্রস্তুতকৃত একধরনের পরিধেয় বস্ত্র যার বয়ন পদ্ধতি অনন্য। জামদানি বুননকালে তৃতীয় একটি সুতা দিয়ে নকশা ফুটিয়ে তোলা হয়। মসলিন বয়নে যেমন ন্যূনপক্ষে ৩০০ কাউন্টের সুত', img: tulcimadan },
//     { position: [24.8955, 91.8687], name: 'সিলেটের শীতল পাটি', district: 'সিলেট', description: 'জামদানি হল কার্পাস তুলা দিয়ে প্রস্তুতকৃত একধরনের পরিধেয় বস্ত্র যার বয়ন পদ্ধতি অনন্য। জামদানি বুননকালে তৃতীয় একটি সুতা দিয়ে নকশা ফুটিয়ে তোলা হয়। মসলিন বয়নে যেমন ন্যূনপক্ষে ৩০০ কাউন্টের সুত', img: siletsitolpati },
//     { position: [24.4071, 88.9610], name: 'নাটোরের কাঁচা গোল্লা', district: 'নাটোর', description: 'জামদানি হল কার্পাস তুলা দিয়ে প্রস্তুতকৃত একধরনের পরিধেয় বস্ত্র যার বয়ন পদ্ধতি অনন্য। জামদানি বুননকালে তৃতীয় একটি সুতা দিয়ে নকশা ফুটিয়ে তোলা হয়। মসলিন বয়নে যেমন ন্যূনপক্ষে ৩০০ কাউন্টের সুত', img: natorkacha },
//     { position: [24.3927, 89.9158], name: 'টাংগাইলের চমচম', district: 'টাংগাইল', description: 'জামদানি হল কার্পাস তুলা দিয়ে প্রস্তুতকৃত একধরনের পরিধেয় বস্ত্র যার বয়ন পদ্ধতি অনন্য। জামদানি বুননকালে তৃতীয় একটি সুতা দিয়ে নকশা ফুটিয়ে তোলা হয়। মসলিন বয়নে যেমন ন্যূনপক্ষে ৩০০ কাউন্টের সুত', img: chomcom },

//     { position: [23.9013, 89.1205], name: 'কুষ্টিয়ার তিলের খাজা', district: 'কুষ্টিয়া', description: 'জামদানি হল কার্পাস তুলা দিয়ে প্রস্তুতকৃত একধরনের পরিধেয় বস্ত্র যার বয়ন পদ্ধতি অনন্য। জামদানি বুননকালে তৃতীয় একটি সুতা দিয়ে নকশা ফুটিয়ে তোলা হয়। মসলিন বয়নে যেমন ন্যূনপক্ষে ৩০০ কাউন্টের সুত', img: kumillahro },
//     { position: [23.1664, 89.2089], name: 'যশোরের খেজুরের গুড', district: 'যশোর',description: 'জামদানি হল কার্পাস তুলা দিয়ে প্রস্তুতকৃত একধরনের পরিধেয় বস্ত্র যার বয়ন পদ্ধতি অনন্য। জামদানি বুননকালে তৃতীয় একটি সুতা দিয়ে নকশা ফুটিয়ে তোলা হয়। মসলিন বয়নে যেমন ন্যূনপক্ষে ৩০০ কাউন্টের সুত',img: kejurgur }
//   ];
//   return (
//     <div className="map-containeree">
//       <div className="header " style={{zIndex:999}}>
//         <div className="card" style={{backgroundColor:"white", color:'blue', border:'none'}}>
//           <div className="row" style={{alignItems:'center'}}>
//             <div className="col-12 col-md-3" style={{alignItems:'center'}}>
//               <img src={logo} alt="" width={200} height={90} />
//             </div>
//             <div className="col-12 col-md-9 " style={{alignItems:'center', textAlign:'right', color: 'blue'}}>
          
//             <h4 className='pe-2'>বাংলাদেশের নির্দেশিত সকল ভৌগোলিক নির্দেশক লিস্ট</h4>
         
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className={`map_legend_infosee ${legendOpen ? 'open' : 'closed'}`}>
//         <div id="map_data_infos" style={{ maxHeight: '310px', overflow: 'auto' }}>
//           <div className='close-btn'>
//           {isDesktop && (
//         <div className='show-btn'>
//           <button onClick={toggleLegend}>{legendOpen ? "Hide List" : "Show List"}</button>
//         </div>
//       )}
//           {isMobile && (
//         <div className='show-btn'>
//           <button onClick={toggleLegend}>{legendOpen ? "Hide List" : "Show List"}</button>
//         </div>
//       )}

//       {/* {isMobile && !legendOpen && (
//         <div className='show-btn'>
//           <button onClick={() => setLegendOpen(true)}>Show List</button>
//         </div>
//       )} */}
//           </div>
//           {legendOpen && isDesktop && (
//         <table className="table table-striped table-hover">
//           <thead className='sticky-top'>
//             <tr>
//               <th className='table-top-title'>ভৌগোলিক নিদর্শন</th>
//               <th className='table-top-title'>জেলা/অঞ্চল</th>
//               <th className='table-top-title'>ওয়েবসাইট </th>
//             </tr>
//           </thead>
//           <tbody>
//             {products.map((product, index) => (
//               <tr key={index}>
//                 <td style={{ paddingLeft: '8px', textAlign: 'left' }}>
//                   <span className='table-title'>{product.name}</span>
//                 </td>
//                 <td style={{ paddingLeft: '8px', textAlign: 'left' }}>
//                   <span className='table-title'>{product.district}</span>
//                 </td>
//                 <td style={{ paddingRight: '8px', textAlign: 'right' }}>
//                   <span className='table-title'>
//                     <a href={product.webLink}> পরিদর্শন</a>
//                   </span>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//           {legendOpen &&  isMobile && (
//         <table className="table table-striped table-hover">
//           <thead className='sticky-top'>
//             <tr>
//               <th className='table-top-title'>ভৌগোলিক নিদর্শন</th>
//               <th className='table-top-title'>জেলা/অঞ্চল</th>
//               <th className='table-top-title'>ওয়েবসাইট </th>
//             </tr>
//           </thead>
//           <tbody>
//             {products.map((product, index) => (
//               <tr key={index}>
//                 <td style={{ paddingLeft: '8px', textAlign: 'left' }}>
//                   <span className='table-title'>{product.name}</span>
//                 </td>
//                 <td style={{ paddingLeft: '8px', textAlign: 'left' }}>
//                   <span className='table-title'>{product.district}</span>
//                 </td>
//                 <td style={{ paddingRight: '8px', textAlign: 'right' }}>
//                   <span className='table-title'>
//                     <a href={product.webLink}> পরিদর্শন</a>
//                   </span>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//         </div>
     
//       </div>
//       <div className="map"></div>
//       <MapContainer center={[23.685, 90.3563]} zoom={7} style={{ height: '100vh', backgroundColor: 'lightblue' }} >
//           <TileLayer
//               url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           />
//           {geojsonData && <GeoJSON data={geojsonData}  style={{ color: 'orange', }}/>}
//           {locations.map((location, index) => (
//     <Marker key={index} position={location.position}>
//       <Popup style={{zIndex:'4'}}>
//         <div className=''>
//           <p><img alt={location.name} src={location.img} decoding="async" width="293" height="193" /></p>
          
//           <div className='d-flex'>
//           <h6 className='fw-bold'>{location.name }</h6><span className='px-2'>({location.district}) </span>
//           </div>
//           <p>{location.description}</p>
//           <h6 className='fw-bold'> তালিকা</h6>
//            <ul>
//              <li>বাগদা চিংড়ি</li>
//              <li>ফজলি আম</li>
//              <li>খিরসাপাতি</li>
//              <li>ইলিশ</li>
//            </ul> 
//            <div className='text-center fw-bold'>
//             <a href="">  ওয়েবসাইট পরিদর্শন</a>
//            </div>
//         </div>
//       </Popup>
//     </Marker>
//   ))}
//       </MapContainer>
//       </div>
// //     </div>
//   );
// }

// export default LeafletMap;















// import { useState } from 'react';
// import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from 'react-leaflet';
// import "leaflet/dist/leaflet.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import bagdachingri from './../../public/location-img/bagdachingri.jpg'
// import boguradoi from './../../public/location-img/boguradoi.jpg'
// import katarivog from './../../public/location-img/katarivog.jpg'
// import kejurgur from './../../public/location-img/kejurgur.jpg'
// import kumillahro from './../../public/location-img/kumillahro.jpg'
// import natorkacha from './../../public/location-img/natorkacha gollah.jpg'
// import chomcom from './../../public/location-img/chomcom.jpg'
// import sadamati from './../../public/location-img/sadamati.jpg'
// import tulcimadan from './../../public/location-img/tulcimadan.jpg'
// import siletsitolpati from './../../public/location-img/siletsitolpati.jpg'
// import sotoronji from './../../public/location-img/sotoronji.jpg'
// import logo from './../../public/log.png'



// import "./map.css";

// function LeafletMap() {
//   const [legendOpen, setLegendOpen] = useState(true); 

//   const toggleLegend = () => {
//     setLegendOpen(!legendOpen);
//   };
//   const products = [
//     { district: '	ঢাকা', name: 'জামদানি শাড়ি', webLink: '#' },
//     { district: 'বাংলাদেশ', name: 'ইলিশ', webLink: '#' },
//     { district: 'চাঁপাইনবাবগঞ্জ', name: 'খিরসাপাত আম', webLink: '#' },
//     { district: 'ঢাকা', name: 'মসলিন শাড়ি', webLink: '#' },
//     { district: 'রাজশাহী', name: 'রাজশাহী সিল্ক', webLink: '#' },
//     { district: 'রংপুর', name: 'শতরঞ্জি বা হস্তশিল্প', webLink: '#' },
//     { district: 'বাংলাদেশ', name: 'কালিজিরা চাল', webLink: '#' },
//     { district: 'দিনাজপুরের', name: 'দিনাজপুরের কাঁটারিভোগ', webLink: '#' },
//     { district: 'নেত্রকোণা', name: ' সাদামাটি', webLink: '#' },
//     { district: 'খুলনা', name: 'বাগদা চিংড়ি', webLink: '#' },
//     { district: 'রাজশাহী,', name: ' ফজলি আম', webLink: '#' },
//     { district: 'বগুড়া', name: 'বগুড়ার দই', webLink: '#' },
//     { district: '	শেরপুর', name: 'শেরপুরের তুলসী মালা ধান', webLink: '#' },
//     { district: 'চাঁপাইনবাবগঞ্জ', name: 'চাঁপাইনবাবগঞ্জের আশ্বিনা আম', webLink: '#' },
//     { district: 'চাঁপাইনবাবগঞ্জ', name: 'চাঁপাইনবাবগঞ্জের ল্যাংডা আম', webLink: '#' },
//     { district: 'সিলেট', name: 'সিলেটের শীতল পাটি', webLink: '#' },
//     { district: 'নাটোর', name: 'নাটোরের কাঁচা গোল্লা', webLink: '#' },
//     { district: 'টাংগাইল', name: 'টাংগাইলের চমচম', webLink: '#' },
//     { district: 'কুমিল্লা ', name: 'কুমিল্লার রসমালাই', webLink: '#' },
//     { district: 'কুষ্টিয়া', name: 'কুষ্টিয়ার তিলের খাজা', webLink: '#' },
//     { district: 'বাংলাদেশ', name: 'বাংলাদেশের ব্ল্যাক বেঙ্গল ছাগল', webLink: '#' },
//     { district: 'যশোর', name: 'যশোরের খেজুরের গুড', webLink: '#' },
//   ];
//   //   const districts = [
//   //     { district: 'ঢাকা', coords: [23.8103, 90.4125] },
//   //     { district: 'চাঁপাইনবাবগঞ্জ', coords: [24.5998, 88.2750] },
//   //     { district: 'রাজশাহী', coords: [24.3745, 88.6042] },
//   //     { district: 'রংপুর', coords: [25.7500, 89.2500] },
//   //     { district: 'বাংলাদেশ', coords: [23.6850, 90.3563] },
//   //     { district: 'দিনাজপুরের', coords: [25.6275, 88.6376] },
//   //     { district: 'নেত্রকোণা', coords: [24.8700, 90.7296] },
//   //     { district: 'খুলনা', coords: [22.8456, 89.5403] },
//   //     { district: 'বগুড়া', coords: [24.8466, 89.3723] },
//   //     { district: 'শেরপুর', coords: [25.0189, 90.0172] },
//   //     { district: 'সিলেট', coords: [24.8955, 91.8687] },
//   //     { district: 'নাটোর', coords: [24.4071, 88.9610] },
//   //     { district: 'টাংগাইল', coords: [24.3927, 89.9158] },
//   //     { district: 'কুমিল্লা', coords: [23.4683, 91.1782] },
//   //     { district: 'কুষ্টিয়া', coords: [23.9013, 89.1205] },
//   //     { district: 'যশোর', coords: [23.1664, 89.2089] }
//   // ];

//   const locations = [

//     {
//       position: [23.8103, 90.4125], name: 'ঢাকা', description: 'জামদানি হল কার্পাস তুলা দিয়ে প্রস্তুতকৃত একধরনের পরিধেয় বস্ত্র যার বয়ন পদ্ধতি অনন্য। জামদানি বুননকালে তৃতীয় একটি সুতা দিয়ে নকশা ফুটিয়ে তোলা হয়। মসলিন বয়নে যেমন ন্যূনপক্ষে ৩০০ কাউন্টের সুতা ব্যবহার করা হয়, ', img: "//upload.wikimedia.org/wikipedia/commons/thumb/1/19/Making_of_Jamdani-9.jpg/200px-Making_of_Jamdani-9.jpg"
//     },
    // { position: [24.3745, 88.6042], name: 'রাজশাহী', description: 'রাজশাহীর সিল্ক   নামটি  দেয়া  হয়েছে কারণ রাজশাহী,বাংলাদেশ এর রেশম তন্তু দিয়ে এটি উৎপন্ন । এটি একটি জনপ্রিয় একটি নাম , বিশেষ করে শাড়িতে রাজশাহীর সিল্ক অনেক সুক্ষ এবং নরম মোলায়েম আঁশ।  আঁশের ', img: "//upload.wikimedia.org/wikipedia/commons/thumb/9/96/Rajshahi_silk_%281%29.jpg/220px-Rajshahi_silk_%281%29.jpg" },
    // { position: [24.5998, 88.2750], name: 'চাঁপাইনবাবগঞ্জ', description: 'খিরসাপাত/খিরশাপাত/ক্ষিরশাপাত/ক্ষীরশাপাত আম, উন্নতজাতের আমের মধ্যে অন্যতম। জুন মাসের শুরু থেকেই এই আম পাকতে শুরু করে। আমটি আকারে গোলাকার আকৃতিতে মাঝারি। আমটি লম্বায় প্রায় ৮ সে.মি., ', img: "//upload.wikimedia.org/wikipedia/commons/thumb/1/1d/%E0%A6%9A%E0%A6%BE%E0%A6%81%E0%A6%AA%E0%A6%BE%E0%A6%87%E0%A6%A8%E0%A6%AC%E0%A6%BE%E0%A6%AC%E0%A6%97%E0%A6%9E%E0%A7%8D%E0%A6%9C_%E0%A6%8F%E0%A6%B0_%E0%A6%96%E0%A6%BF%E0%A6%B0%E0%A6%B8%E0%A6%BE%E0%A6%AA%E0%A6%BE%E0%A6%A4_%E0%A6%86%E0%A6%AE.jpg/220px-%E0%A6%9A%E0%A6%BE%E0%A6%81%E0%A6%AA%E0%A6%BE%E0%A6%87%E0%A6%A8%E0%A6%AC%E0%A6%BE%E0%A6%AC%E0%A6%97%E0%A6%9E%E0%A7%8D%E0%A6%9C_%E0%A6%8F%E0%A6%B0_%E0%A6%96%E0%A6%BF%E0%A6%B0%E0%A6%B8%E0%A6%BE%E0%A6%AA%E0%A6%BE%E0%A6%A4_%E0%A6%86%E0%A6%AE.jpg" },
    // { position: [25.7500, 89.2500], name: 'রংপুর', description: 'জামদানি হল কার্পাস তুলা দিয়ে প্রস্তুতকৃত একধরনের পরিধেয় বস্ত্র যার বয়ন পদ্ধতি অনন্য। জামদানি বুননকালে তৃতীয় একটি সুতা দিয়ে নকশা ফুটিয়ে তোলা হয়। মসলিন বয়নে যেমন ন্যূনপক্ষে ৩০০ কাউন্টের সুত', img: sotoronji },
    // { position: [25.6275, 88.6376], name: 'দিনাজপুরের', description: 'জামদানি হল কার্পাস তুলা দিয়ে প্রস্তুতকৃত একধরনের পরিধেয় বস্ত্র যার বয়ন পদ্ধতি অনন্য। জামদানি বুননকালে তৃতীয় একটি সুতা দিয়ে নকশা ফুটিয়ে তোলা হয়। মসলিন বয়নে যেমন ন্যূনপক্ষে ৩০০ কাউন্টের সুত', img: katarivog },
    // { position: [24.8700, 90.7296], name: 'নেত্রকোণা', description: 'জামদানি হল কার্পাস তুলা দিয়ে প্রস্তুতকৃত একধরনের পরিধেয় বস্ত্র যার বয়ন পদ্ধতি অনন্য। জামদানি বুননকালে তৃতীয় একটি সুতা দিয়ে নকশা ফুটিয়ে তোলা হয়। মসলিন বয়নে যেমন ন্যূনপক্ষে ৩০০ কাউন্টের সুত', img: sadamati },
    // { position: [22.8456, 89.5403], name: 'খুলনা', description: 'জামদানি হল কার্পাস তুলা দিয়ে প্রস্তুতকৃত একধরনের পরিধেয় বস্ত্র যার বয়ন পদ্ধতি অনন্য। জামদানি বুননকালে তৃতীয় একটি সুতা দিয়ে নকশা ফুটিয়ে তোলা হয়। মসলিন বয়নে যেমন ন্যূনপক্ষে ৩০০ কাউন্টের সুত', img: bagdachingri },
    // { position: [24.8466, 89.3723], name: 'বগুড়া', description: 'জামদানি হল কার্পাস তুলা দিয়ে প্রস্তুতকৃত একধরনের পরিধেয় বস্ত্র যার বয়ন পদ্ধতি অনন্য। জামদানি বুননকালে তৃতীয় একটি সুতা দিয়ে নকশা ফুটিয়ে তোলা হয়। মসলিন বয়নে যেমন ন্যূনপক্ষে ৩০০ কাউন্টের সুত', img: boguradoi },
    // { position: [25.0189, 90.0172], name: 'শেরপুর', description: 'জামদানি হল কার্পাস তুলা দিয়ে প্রস্তুতকৃত একধরনের পরিধেয় বস্ত্র যার বয়ন পদ্ধতি অনন্য। জামদানি বুননকালে তৃতীয় একটি সুতা দিয়ে নকশা ফুটিয়ে তোলা হয়। মসলিন বয়নে যেমন ন্যূনপক্ষে ৩০০ কাউন্টের সুত', img: tulcimadan },
    // { position: [24.8955, 91.8687], name: 'সিলেট', description: 'জামদানি হল কার্পাস তুলা দিয়ে প্রস্তুতকৃত একধরনের পরিধেয় বস্ত্র যার বয়ন পদ্ধতি অনন্য। জামদানি বুননকালে তৃতীয় একটি সুতা দিয়ে নকশা ফুটিয়ে তোলা হয়। মসলিন বয়নে যেমন ন্যূনপক্ষে ৩০০ কাউন্টের সুত', img: siletsitolpati },
    // { position: [24.4071, 88.9610], name: 'নাটোর', description: 'জামদানি হল কার্পাস তুলা দিয়ে প্রস্তুতকৃত একধরনের পরিধেয় বস্ত্র যার বয়ন পদ্ধতি অনন্য। জামদানি বুননকালে তৃতীয় একটি সুতা দিয়ে নকশা ফুটিয়ে তোলা হয়। মসলিন বয়নে যেমন ন্যূনপক্ষে ৩০০ কাউন্টের সুত', img: natorkacha },
    // { position: [24.3927, 89.9158], name: 'টাংগাইল', description: 'জামদানি হল কার্পাস তুলা দিয়ে প্রস্তুতকৃত একধরনের পরিধেয় বস্ত্র যার বয়ন পদ্ধতি অনন্য। জামদানি বুননকালে তৃতীয় একটি সুতা দিয়ে নকশা ফুটিয়ে তোলা হয়। মসলিন বয়নে যেমন ন্যূনপক্ষে ৩০০ কাউন্টের সুত', img: chomcom },

    // { position: [23.9013, 89.1205], name: 'কুষ্টিয়া', description: 'জামদানি হল কার্পাস তুলা দিয়ে প্রস্তুতকৃত একধরনের পরিধেয় বস্ত্র যার বয়ন পদ্ধতি অনন্য। জামদানি বুননকালে তৃতীয় একটি সুতা দিয়ে নকশা ফুটিয়ে তোলা হয়। মসলিন বয়নে যেমন ন্যূনপক্ষে ৩০০ কাউন্টের সুত', img: kumillahro },
    // { position: [23.1664, 89.2089], name: 'যশোর',description: 'জামদানি হল কার্পাস তুলা দিয়ে প্রস্তুতকৃত একধরনের পরিধেয় বস্ত্র যার বয়ন পদ্ধতি অনন্য। জামদানি বুননকালে তৃতীয় একটি সুতা দিয়ে নকশা ফুটিয়ে তোলা হয়। মসলিন বয়নে যেমন ন্যূনপক্ষে ৩০০ কাউন্টের সুত',img: kejurgur }

//   ];
//   const bangladeshGeoJSON = {
//     "type": "Feature",
//     "properties": {},
//     "geometry": {
//       "type": "Polygon",
//       "coordinates": [
//         [
//           [88.0478, 20.7035],
//           [92.6737, 20.7035],
//           [92.6737, 26.6316],
//           [88.0478, 26.6316],
//           [88.0478, 20.7035]
//         ]
//       ]
//     }
//   };
//   const borderStyle = {
//     fillColor: 'orange',
//     color: 'blue',
//     weight: 2, // Border width
//     dashArray: '5', // Border style (dotted)
//   };
//   return (
//     <div className="map-containeree">
//       <div className="header">
//         <div className="card" style={{backgroundColor:"rgb(195 63 23 / 54%)"}}>
//           <div className="row" style={{alignItems:'center'}}>
//             <div className="col-12 col-md-3" style={{alignItems:'center'}}>
//               <img src={logo} alt="" width={200} height={90} />
//             </div>
//             <div className="col-12 col-md-9 " style={{alignItems:'center', textAlign:'right', color: '#fff'}}>
          
//             <h4 className='pe-2'>বাংলাদেশের নির্দেশিত সকল ভৌগোলিক নির্দেশক লিস্ট</h4>
         
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className={`map_legend_infosee ${legendOpen ? 'open' : 'closed'}`}>
//         <div id="map_data_infos" style={{ maxHeight: '310px', overflow: 'auto' }}>
//           <div className='close-btn'>
//             {!legendOpen && (
//               <div className='show-btn'>
//                 <button className="close-button" onClick={toggleLegend}>Hide List</button>
//               </div>
//             )}
//                {legendOpen && (
//           <div className='show-btn'>
//             <button className="show-button" onClick={toggleLegend}>Show List</button>
//           </div>
//         )}
//           </div>
//           {!legendOpen && (
//             <table className="table table-striped table-hover">
//               <thead className='sticky-top'>
//                 <tr>
                 
//                   <th className='table-top-title'>জেলা/অঞ্চল</th>
//                   <th className='table-top-title'>ভৌগোলিক নিদর্শন</th>
//                   <th className='table-top-title'>ওয়েবসাইট </th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {products.map((product, index) => (
//                   <tr key={index}>
                   
//                     <td style={{ paddingLeft: '8px', textAlign: 'left' }}> <span className='table-title'>{product.district}</span></td>
//                     <td style={{ paddingLeft: '8px', textAlign: 'left' }}> <span className='table-title'>{product.name}</span></td>
//                     <td style={{ paddingRight: '8px', textAlign: 'right' }}> <span className='table-title'>
//                       <a href={product.webLink}>পরিদর্শন</a>
//                     </span></td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           )}
//         </div>
     
//       </div>
//       <div className="map">
//       <MapContainer center={[23.685, 90.3563]} zoom={7} scrollWheelZoom={false}>
//   <TileLayer
//     attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//   />
//  <GeoJSON data={bangladeshGeoJSON} style={borderStyle} />
//   {locations.map((location, index) => (
//     <Marker key={index} position={location.position}>
//       <Popup>
//         <div>
//           <p><img alt={location.name} src={location.img} decoding="async" width="293" height="193" /></p>
//           <h5>{location.name}</h5>
//           <p>{location.description}</p>
//           <h6>পণ্য তালিকা</h6>
//           <ul>
//             <li>বাগদা চিংড়ি</li>
//             <li>ফজলি আম</li>
//             <li>খিরসাপাতি</li>
//             <li>ইলিশ</li>
//           </ul>
//         </div>
//       </Popup>
//     </Marker>
//   ))}
// </MapContainer>
//       </div>
//     </div>
//   );
// }

// export default LeafletMap;















// import { useState } from 'react';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import "leaflet/dist/leaflet.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import bagdachingri from './../../public/location-img/bagdachingri.jpg'
// import boguradoi from './../../public/location-img/boguradoi.jpg'
// import katarivog from './../../public/location-img/katarivog.jpg'
// import kejurgur from './../../public/location-img/kejurgur.jpg'
// import kumillahro from './../../public/location-img/kumillahro.jpg'
// import natorkacha from './../../public/location-img/natorkacha gollah.jpg'
// import chomcom from './../../public/location-img/chomcom.jpg'
// import sadamati from './../../public/location-img/sadamati.jpg'
// import tulcimadan from './../../public/location-img/tulcimadan.jpg'
// import siletsitolpati from './../../public/location-img/siletsitolpati.jpg'
// import sotoronji from './../../public/location-img/sotoronji.jpg'



// import "./map.css";

// function LeafletMap() {
//   const [legendOpen, setLegendOpen] = useState(true); // Initially set to true to show legend

//   const toggleLegend = () => {
//     setLegendOpen(!legendOpen);
//   };
//   const products = [
//     { district: '	ঢাকা', name: 'জামদানি শাড়ি', webLink: '#' },
//     { district: 'বাংলাদেশ', name: 'ইলিশ', webLink: '#' },
//     { district: 'চাঁপাইনবাবগঞ্জ', name: 'খিরসাপাত আম', webLink: '#' },
//     { district: 'ঢাকা', name: 'মসলিন শাড়ি', webLink: '#' },
//     { district: 'রাজশাহী', name: 'রাজশাহী সিল্ক', webLink: '#' },
//     { district: 'রংপুর', name: 'শতরঞ্জি বা হস্তশিল্প', webLink: '#' },
//     { district: 'বাংলাদেশ', name: 'কালিজিরা চাল', webLink: '#' },
//     { district: 'দিনাজপুরের', name: 'দিনাজপুরের কাঁটারিভোগ', webLink: '#' },
//     { district: 'নেত্রকোণা', name: ' সাদামাটি', webLink: '#' },
//     { district: 'খুলনা', name: 'বাগদা চিংড়ি', webLink: '#' },
//     { district: 'রাজশাহী,', name: ' ফজলি আম', webLink: '#' },
//     { district: 'বগুড়া', name: 'বগুড়ার দই', webLink: '#' },
//     { district: '	শেরপুর', name: 'শেরপুরের তুলসী মালা ধান', webLink: '#' },
//     { district: 'চাঁপাইনবাবগঞ্জ', name: 'চাঁপাইনবাবগঞ্জের আশ্বিনা আম', webLink: '#' },
//     { district: 'চাঁপাইনবাবগঞ্জ', name: 'চাঁপাইনবাবগঞ্জের ল্যাংডা আম', webLink: '#' },
//     { district: 'সিলেট', name: 'সিলেটের শীতল পাটি', webLink: '#' },
//     { district: 'নাটোর', name: 'নাটোরের কাঁচা গোল্লা', webLink: '#' },
//     { district: 'টাংগাইল', name: 'টাংগাইলের চমচম', webLink: '#' },
//     { district: 'কুমিল্লা ', name: 'কুমিল্লার রসমালাই', webLink: '#' },
//     { district: 'কুষ্টিয়া', name: 'কুষ্টিয়ার তিলের খাজা', webLink: '#' },
//     { district: 'বাংলাদেশ', name: 'বাংলাদেশের ব্ল্যাক বেঙ্গল ছাগল', webLink: '#' },
//     { district: 'যশোর', name: 'যশোরের খেজুরের গুড', webLink: '#' },
//   ];
//   //   const districts = [
//   //     { district: 'ঢাকা', coords: [23.8103, 90.4125] },
//   //     { district: 'চাঁপাইনবাবগঞ্জ', coords: [24.5998, 88.2750] },
//   //     { district: 'রাজশাহী', coords: [24.3745, 88.6042] },
//   //     { district: 'রংপুর', coords: [25.7500, 89.2500] },
//   //     { district: 'বাংলাদেশ', coords: [23.6850, 90.3563] },
//   //     { district: 'দিনাজপুরের', coords: [25.6275, 88.6376] },
//   //     { district: 'নেত্রকোণা', coords: [24.8700, 90.7296] },
//   //     { district: 'খুলনা', coords: [22.8456, 89.5403] },
//   //     { district: 'বগুড়া', coords: [24.8466, 89.3723] },
//   //     { district: 'শেরপুর', coords: [25.0189, 90.0172] },
//   //     { district: 'সিলেট', coords: [24.8955, 91.8687] },
//   //     { district: 'নাটোর', coords: [24.4071, 88.9610] },
//   //     { district: 'টাংগাইল', coords: [24.3927, 89.9158] },
//   //     { district: 'কুমিল্লা', coords: [23.4683, 91.1782] },
//   //     { district: 'কুষ্টিয়া', coords: [23.9013, 89.1205] },
//   //     { district: 'যশোর', coords: [23.1664, 89.2089] }
//   // ];

//   const locations = [

//     {
//       position: [23.8103, 90.4125], name: 'ঢাকা', description: 'জামদানি হল কার্পাস তুলা দিয়ে প্রস্তুতকৃত একধরনের পরিধেয় বস্ত্র যার বয়ন পদ্ধতি অনন্য। জামদানি বুননকালে তৃতীয় একটি সুতা দিয়ে নকশা ফুটিয়ে তোলা হয়। মসলিন বয়নে যেমন ন্যূনপক্ষে ৩০০ কাউন্টের সুতা ব্যবহার করা হয়, জামদানি বয়নে সাধারণত ২৬-৮০-৮৪ কাউন্টের সূতা ব্যবহৃত হয়। হালে জামদানী নানা স্থানে তৈরী করা হয় বটে কিন্তু ঢাকাকেই জামদানির আদি জন্মস্থান বলে গণ্য করা হয়। জামদানি বয়নের অতুলনীয় পদ্ধতি ইউনেস্কো কর্তৃক একটি অধরা সাংস্কৃতিক ঐতিহ্য হিসেবে স্বীকৃত হয়েছে', img: "//upload.wikimedia.org/wikipedia/commons/thumb/1/19/Making_of_Jamdani-9.jpg/200px-Making_of_Jamdani-9.jpg"
//     },
//     { position: [24.3745, 88.6042], name: 'রাজশাহী', description: 'রাজশাহীর সিল্ক   নামটি  দেয়া  হয়েছে কারণ রাজশাহী,বাংলাদেশ এর রেশম তন্তু দিয়ে এটি উৎপন্ন । এটি একটি জনপ্রিয় একটি নাম , বিশেষ করে শাড়িতে রাজশাহীর সিল্ক অনেক সুক্ষ এবং নরম মোলায়েম আঁশ।  আঁশের উপাদান  পিউপা[১] যা আসে তুঁত রেশম  থেকে এবং  এটি  প্রোটিন এর আবরন যা সারসিনা নামে ডাকা হয়।', img: "//upload.wikimedia.org/wikipedia/commons/thumb/9/96/Rajshahi_silk_%281%29.jpg/220px-Rajshahi_silk_%281%29.jpg" },
//     { position: [24.5998, 88.2750], name: 'চাঁপাইনবাবগঞ্জ', description: 'খিরসাপাত/খিরশাপাত/ক্ষিরশাপাত/ক্ষীরশাপাত আম, উন্নতজাতের আমের মধ্যে অন্যতম। জুন মাসের শুরু থেকেই এই আম পাকতে শুরু করে। আমটি আকারে গোলাকার আকৃতিতে মাঝারি। আমটি লম্বায় প্রায় ৮ সে.মি., প্রস্থে প্রায় ৭ সে.মি. ওজনে প্রায় ২৬৪ গ্রাম মতো হয়। খিরসাপাত আমের বোঁটা বেশ মোটা এবং শক্ত।', img: "//upload.wikimedia.org/wikipedia/commons/thumb/1/1d/%E0%A6%9A%E0%A6%BE%E0%A6%81%E0%A6%AA%E0%A6%BE%E0%A6%87%E0%A6%A8%E0%A6%AC%E0%A6%BE%E0%A6%AC%E0%A6%97%E0%A6%9E%E0%A7%8D%E0%A6%9C_%E0%A6%8F%E0%A6%B0_%E0%A6%96%E0%A6%BF%E0%A6%B0%E0%A6%B8%E0%A6%BE%E0%A6%AA%E0%A6%BE%E0%A6%A4_%E0%A6%86%E0%A6%AE.jpg/220px-%E0%A6%9A%E0%A6%BE%E0%A6%81%E0%A6%AA%E0%A6%BE%E0%A6%87%E0%A6%A8%E0%A6%AC%E0%A6%BE%E0%A6%AC%E0%A6%97%E0%A6%9E%E0%A7%8D%E0%A6%9C_%E0%A6%8F%E0%A6%B0_%E0%A6%96%E0%A6%BF%E0%A6%B0%E0%A6%B8%E0%A6%BE%E0%A6%AA%E0%A6%BE%E0%A6%A4_%E0%A6%86%E0%A6%AE.jpg" },
//     { position: [25.7500, 89.2500], name: 'রংপুর', description: 'জামদানি হল কার্পাস তুলা দিয়ে প্রস্তুতকৃত একধরনের পরিধেয় বস্ত্র যার বয়ন পদ্ধতি অনন্য। জামদানি বুননকালে তৃতীয় একটি সুতা দিয়ে নকশা ফুটিয়ে তোলা হয়। মসলিন বয়নে যেমন ন্যূনপক্ষে ৩০০ কাউন্টের সুতা ব্যবহার করা হয়, জামদানি বয়নে সাধারণত ২৬-৮০-৮৪ কাউন্টের সূতা ব্যবহৃত হয়। হালে জামদানী নানা স্থানে তৈরী করা হয় বটে কিন্তু ঢাকাকেই জামদানির আদি জন্মস্থান বলে গণ্য করা হয়। জামদানি বয়নের অতুলনীয় পদ্ধতি ইউনেস্কো কর্তৃক একটি অধরা সাংস্কৃতিক ঐতিহ্য হিসেবে স্বীকৃত হয়েছে', img: sotoronji },
//     { position: [25.6275, 88.6376], name: 'দিনাজপুরের', description: 'জামদানি হল কার্পাস তুলা দিয়ে প্রস্তুতকৃত একধরনের পরিধেয় বস্ত্র যার বয়ন পদ্ধতি অনন্য। জামদানি বুননকালে তৃতীয় একটি সুতা দিয়ে নকশা ফুটিয়ে তোলা হয়। মসলিন বয়নে যেমন ন্যূনপক্ষে ৩০০ কাউন্টের সুতা ব্যবহার করা হয়, জামদানি বয়নে সাধারণত ২৬-৮০-৮৪ কাউন্টের সূতা ব্যবহৃত হয়। হালে জামদানী নানা স্থানে তৈরী করা হয় বটে কিন্তু ঢাকাকেই জামদানির আদি জন্মস্থান বলে গণ্য করা হয়। জামদানি বয়নের অতুলনীয় পদ্ধতি ইউনেস্কো কর্তৃক একটি অধরা সাংস্কৃতিক ঐতিহ্য হিসেবে স্বীকৃত হয়েছে', img: katarivog },
//     { position: [24.8700, 90.7296], name: 'নেত্রকোণা', description: 'জামদানি হল কার্পাস তুলা দিয়ে প্রস্তুতকৃত একধরনের পরিধেয় বস্ত্র যার বয়ন পদ্ধতি অনন্য। জামদানি বুননকালে তৃতীয় একটি সুতা দিয়ে নকশা ফুটিয়ে তোলা হয়। মসলিন বয়নে যেমন ন্যূনপক্ষে ৩০০ কাউন্টের সুতা ব্যবহার করা হয়, জামদানি বয়নে সাধারণত ২৬-৮০-৮৪ কাউন্টের সূতা ব্যবহৃত হয়। হালে জামদানী নানা স্থানে তৈরী করা হয় বটে কিন্তু ঢাকাকেই জামদানির আদি জন্মস্থান বলে গণ্য করা হয়। জামদানি বয়নের অতুলনীয় পদ্ধতি ইউনেস্কো কর্তৃক একটি অধরা সাংস্কৃতিক ঐতিহ্য হিসেবে স্বীকৃত হয়েছে', img: sadamati },
//     { position: [22.8456, 89.5403], name: 'খুলনা', description: 'জামদানি হল কার্পাস তুলা দিয়ে প্রস্তুতকৃত একধরনের পরিধেয় বস্ত্র যার বয়ন পদ্ধতি অনন্য। জামদানি বুননকালে তৃতীয় একটি সুতা দিয়ে নকশা ফুটিয়ে তোলা হয়। মসলিন বয়নে যেমন ন্যূনপক্ষে ৩০০ কাউন্টের সুতা ব্যবহার করা হয়, জামদানি বয়নে সাধারণত ২৬-৮০-৮৪ কাউন্টের সূতা ব্যবহৃত হয়। হালে জামদানী নানা স্থানে তৈরী করা হয় বটে কিন্তু ঢাকাকেই জামদানির আদি জন্মস্থান বলে গণ্য করা হয়। জামদানি বয়নের অতুলনীয় পদ্ধতি ইউনেস্কো কর্তৃক একটি অধরা সাংস্কৃতিক ঐতিহ্য হিসেবে স্বীকৃত হয়েছে', img: bagdachingri },
//     { position: [24.8466, 89.3723], name: 'বগুড়া', description: 'জামদানি হল কার্পাস তুলা দিয়ে প্রস্তুতকৃত একধরনের পরিধেয় বস্ত্র যার বয়ন পদ্ধতি অনন্য। জামদানি বুননকালে তৃতীয় একটি সুতা দিয়ে নকশা ফুটিয়ে তোলা হয়। মসলিন বয়নে যেমন ন্যূনপক্ষে ৩০০ কাউন্টের সুতা ব্যবহার করা হয়, জামদানি বয়নে সাধারণত ২৬-৮০-৮৪ কাউন্টের সূতা ব্যবহৃত হয়। হালে জামদানী নানা স্থানে তৈরী করা হয় বটে কিন্তু ঢাকাকেই জামদানির আদি জন্মস্থান বলে গণ্য করা হয়। জামদানি বয়নের অতুলনীয় পদ্ধতি ইউনেস্কো কর্তৃক একটি অধরা সাংস্কৃতিক ঐতিহ্য হিসেবে স্বীকৃত হয়েছে', img: boguradoi },
//     { position: [25.0189, 90.0172], name: 'শেরপুর', description: 'জামদানি হল কার্পাস তুলা দিয়ে প্রস্তুতকৃত একধরনের পরিধেয় বস্ত্র যার বয়ন পদ্ধতি অনন্য। জামদানি বুননকালে তৃতীয় একটি সুতা দিয়ে নকশা ফুটিয়ে তোলা হয়। মসলিন বয়নে যেমন ন্যূনপক্ষে ৩০০ কাউন্টের সুতা ব্যবহার করা হয়, জামদানি বয়নে সাধারণত ২৬-৮০-৮৪ কাউন্টের সূতা ব্যবহৃত হয়। হালে জামদানী নানা স্থানে তৈরী করা হয় বটে কিন্তু ঢাকাকেই জামদানির আদি জন্মস্থান বলে গণ্য করা হয়। জামদানি বয়নের অতুলনীয় পদ্ধতি ইউনেস্কো কর্তৃক একটি অধরা সাংস্কৃতিক ঐতিহ্য হিসেবে স্বীকৃত হয়েছে', img: tulcimadan },
//     { position: [24.8955, 91.8687], name: 'সিলেট', description: 'জামদানি হল কার্পাস তুলা দিয়ে প্রস্তুতকৃত একধরনের পরিধেয় বস্ত্র যার বয়ন পদ্ধতি অনন্য। জামদানি বুননকালে তৃতীয় একটি সুতা দিয়ে নকশা ফুটিয়ে তোলা হয়। মসলিন বয়নে যেমন ন্যূনপক্ষে ৩০০ কাউন্টের সুতা ব্যবহার করা হয়, জামদানি বয়নে সাধারণত ২৬-৮০-৮৪ কাউন্টের সূতা ব্যবহৃত হয়। হালে জামদানী নানা স্থানে তৈরী করা হয় বটে কিন্তু ঢাকাকেই জামদানির আদি জন্মস্থান বলে গণ্য করা হয়। জামদানি বয়নের অতুলনীয় পদ্ধতি ইউনেস্কো কর্তৃক একটি অধরা সাংস্কৃতিক ঐতিহ্য হিসেবে স্বীকৃত হয়েছে', img: siletsitolpati },
//     { position: [24.4071, 88.9610], name: 'নাটোর', description: 'জামদানি হল কার্পাস তুলা দিয়ে প্রস্তুতকৃত একধরনের পরিধেয় বস্ত্র যার বয়ন পদ্ধতি অনন্য। জামদানি বুননকালে তৃতীয় একটি সুতা দিয়ে নকশা ফুটিয়ে তোলা হয়। মসলিন বয়নে যেমন ন্যূনপক্ষে ৩০০ কাউন্টের সুতা ব্যবহার করা হয়, জামদানি বয়নে সাধারণত ২৬-৮০-৮৪ কাউন্টের সূতা ব্যবহৃত হয়। হালে জামদানী নানা স্থানে তৈরী করা হয় বটে কিন্তু ঢাকাকেই জামদানির আদি জন্মস্থান বলে গণ্য করা হয়। জামদানি বয়নের অতুলনীয় পদ্ধতি ইউনেস্কো কর্তৃক একটি অধরা সাংস্কৃতিক ঐতিহ্য হিসেবে স্বীকৃত হয়েছে', img: natorkacha },
//     { position: [24.3927, 89.9158], name: 'টাংগাইল', description: 'জামদানি হল কার্পাস তুলা দিয়ে প্রস্তুতকৃত একধরনের পরিধেয় বস্ত্র যার বয়ন পদ্ধতি অনন্য। জামদানি বুননকালে তৃতীয় একটি সুতা দিয়ে নকশা ফুটিয়ে তোলা হয়। মসলিন বয়নে যেমন ন্যূনপক্ষে ৩০০ কাউন্টের সুতা ব্যবহার করা হয়, জামদানি বয়নে সাধারণত ২৬-৮০-৮৪ কাউন্টের সূতা ব্যবহৃত হয়। হালে জামদানী নানা স্থানে তৈরী করা হয় বটে কিন্তু ঢাকাকেই জামদানির আদি জন্মস্থান বলে গণ্য করা হয়। জামদানি বয়নের অতুলনীয় পদ্ধতি ইউনেস্কো কর্তৃক একটি অধরা সাংস্কৃতিক ঐতিহ্য হিসেবে স্বীকৃত হয়েছে', img: chomcom },

//     { position: [23.9013, 89.1205], name: 'কুষ্টিয়া', description: ' Upcomming', img: kumillahro },
//     { position: [23.1664, 89.2089], name: 'যশোর', description: ' Upcomming', img: kejurgur }

//   ];


  

//   return (
//     <div className="map-containeree">
//       <div className={`map_legend_infosee ${legendOpen ? 'open' : 'closed'}`}>
//         <div id="map_data_infos" style={{ maxHeight: '310px', overflow: 'auto' }}>
//           <div className='close-btn'>
//             {legendOpen && (
//               <div className='show-btn'>
//                 <button className="close-button" onClick={toggleLegend}>Hide</button>
//               </div>
//             )}
//           </div>
//           {legendOpen && (
//             <table className="table table-striped table-hover">
//               <thead className='sticky-top'>
//                 <tr>
//                   <th className='table-top-title'>জেলা/অঞ্চল</th>
//                   <th className='table-top-title'>ভৌগোলিক নিদর্শন</th>
//                   <th className='table-top-title'>ওয়েবসাইট </th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {products.map((product, index) => (
//                   <tr key={index}>
//                     <td style={{ paddingLeft: '8px', textAlign: 'left' }}> <span className='table-title'>{product.district}</span></td>
//                     <td style={{ paddingLeft: '8px', textAlign: 'left' }}> <span className='table-title'>{product.name}</span></td>
//                     <td style={{ paddingRight: '8px', textAlign: 'right' }}> <span className='table-title'>
//                       <a href={product.webLink}>পরিদর্শন</a>
//                     </span></td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           )}
//         </div>
//         {!legendOpen && (
//           <div className='show-btn'>
//             <button className="show-button" onClick={toggleLegend}>Show</button>
//           </div>
//         )}
//       </div>
//       <div className="map">
//         <MapContainer center={[23.685, 90.3563]} zoom={7} scrollWheelZoom={false}>
//           <TileLayer
//             attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//             url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           />
          
//           {locations.map((location, index) => (
//             <Marker key={index} position={location.position}>
//               <Popup>
//                 <div>
//                   <p><img alt={location.name} src={location.img} decoding="async" width="293" height="293" /></p>
//                   <h3>{location.name}</h3>
//                   <p>{location.description}</p>

//                 </div>
//               </Popup>
//             </Marker>
//           ))}
//         </MapContainer>
//       </div>
//     </div>
//   );
// }

// export default LeafletMap;















