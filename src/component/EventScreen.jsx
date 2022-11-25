import React, { useEffect, useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import {BsCalendarDateFill} from "react-icons/bs"
import {BiTime,BiCurrentLocation} from "react-icons/bi"
import { Pagination } from "swiper";
import { Tabs, Slider } from "antd";
import { AiOutlineAlignCenter } from "react-icons/ai";
const EventScreen = () => {
  const [hall, setHall] = useState([]);
  const [list , setList] = useState([])
  const [moderator , setModerator] = useState([])
  const [panelist , setPanelist] = useState([])
  const [session, setSession] = useState("");
  const [date, setDate] = useState("");
  const [topic, setTopic] = useState([])
  const [halls, setHalls] = useState("");
  const [judges , setJudges] = useState([])
  const [active1, setActive1] = useState(false);
  const [convenor , setConvenor] = useState([])
  const [chairperson , setChairperson] = useState([])
  const [papers , setPapers] = useState([])
  const navigate = useNavigate();
  useEffect(() => {
    const user = localStorage.getItem("user");
    const password = localStorage.getItem("password");
    if (user !== "OSOCON2022" && password !== "Osocon@2022") {
      navigate("/");
    }
  }, [session]);
  const { TabPane } = Tabs;
  const callback = (key) => {
    console.log(key);
  };
  const setHallTwo = () => {
    setHall(twoHall);
    setDate("25-11-2022");
    setActive1(true);
  };
  const setHallThree = () => {
    setHall(threeHall);
    setDate("26-11-2022");
    setActive1(false);
  };
  const setHallFour = () => {
    setHall(threeHall);
    setDate("27-11-2022");
  };

  const twoHall = [
    {
      id: 1,
      hall: "A",
    },
    {
      id: 2,
      hall: "B",
    },
  ];
  const threeHall = [
    {
      id: 1,
      hall: "A",
    },
    {
      id: 2,
      hall: "B",
    },
    {
      id: 1,
      hall: "C",
    },
  ];

  const hallA = () => {
    setHalls("A");
  };
  const hallB = () => {
    setHalls("B");
  };
  const hallC = () => {
    setHalls("C");
  };

  const submit = () => {
    const data = {
      date : date ,
      hall : halls,
      session : session
    }
    axios.post("https://osocon.vercel.app/api/title/filter" , data)
    .then((res) => {
      console.log(res)
      setList(res.data.list)
      setJudges(res.data.list[0].judges)
      setModerator(res.data.list[0].moderator)
      setPanelist(res.data.list[0].panelist)
      if(res.data.list[0].papers){
        setPapers(res.data.list[0].papers)
      }
      setChairperson(res.data.list[0].chairperson)
      setTopic(res.data.list[0].topic)
      setConvenor(res.data.list[0].convenor)
      
    })
  }

  return (
    <div className="event-background">
      <h6 className="heading">Scientific session</h6>

      <div className="container">
        <div className="row">
          <div className="col-4 mt-4">
            <div
              className="date-button"
              style={{
                backgroundColor: "DeepSkyBlue  ",
                color: "white",
              }}
              onClick={setHallTwo}
            >
              <center>
                {" "}
                <p className=" day pt-2">Friday</p>
              </center>
              <center>
                {" "}
                <p className=" date fw-bold">25/11/2022</p>
              </center>
            </div>
          </div>
          <div className="col-4 mt-4">
            <div
              className="date-button"
              style={{
                backgroundColor: "DeepSkyBlue  ",
                color: "white",
              }}
              onClick={setHallThree}
            >
              <center>
                {" "}
                <p className="text-white day pt-2">Saturday</p>
              </center>
              <center>
                {" "}
                <p className="text-white date fw-bold">26/11/2022</p>
              </center>
            </div>
          </div>
          <div className="col-4 mt-4">
            <div
              className="date-button"
              style={{
                backgroundColor: "DeepSkyBlue  ",
                color: "white",
              }}
              onClick={setHallFour}
            >
              <center>
                {" "}
                <p className="text-white day pt-2">Sunday</p>
              </center>
              <center>
                {" "}
                <p className="text-white date fw-bold">27/11/2022</p>
              </center>
            </div>
          </div>
        </div>
        <p className="text-danger mt-2">Selected date : {date}</p>
      </div>
      <div className="hall-group">
        <p className="mt-4 fw-bold ms-4 mb-3">Select hall :</p>
        <div className="row justify-content-center">
          {active1 ? (
            <>
              {" "}
              <div className="col-3 ">
                <div
                  onClick={hallA}
                  className="date-button"
                  style={{
                    backgroundColor: "DeepSkyBlue  ",
                    color: "white",
                  }}
                >
                  <center>
                    {" "}
                    <p className=" day pt-2">Hall</p>
                  </center>
                  <center>
                    {" "}
                    <p className=" date fw-bold">A</p>
                  </center>
                </div>
              </div>
              <div className="col-3 ">
                <div
                  onClick={hallB}
                  className="date-button"
                  style={{
                    backgroundColor: "DeepSkyBlue  ",
                    color: "white",
                  }}
                >
                  <center>
                    {" "}
                    <p className=" day pt-2">Hall</p>
                  </center>
                  <center>
                    {" "}
                    <p className=" date fw-bold">B</p>
                  </center>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="col-3 " onClick={hallA}>
                <div
                  className="date-button"
                  style={{
                    backgroundColor: "DeepSkyBlue  ",
                    color: "white",
                  }}
                >
                  <center>
                    {" "}
                    <p className=" day pt-2">Hall</p>
                  </center>
                  <center>
                    {" "}
                    <p className=" date fw-bold">A</p>
                  </center>
                </div>
              </div>
              <div className="col-3 " onClick={hallB}>
                <div
                  className="date-button"
                  style={{
                    backgroundColor: "DeepSkyBlue  ",
                    color: "white",
                  }}
                >
                  <center>
                    {" "}
                    <p className=" day pt-2">Hall</p>
                  </center>
                  <center>
                    {" "}
                    <p className=" date fw-bold">B</p>
                  </center>
                </div>
              </div>
              <div className="col-3 ">
                <div
                  onClick={hallC}
                  className="date-button"
                  style={{
                    backgroundColor: "DeepSkyBlue  ",
                    color: "white",
                  }}
                >
                  <center>
                    {" "}
                    <p className=" day pt-2">Hall</p>
                  </center>
                  <center>
                    {" "}
                    <p className=" date fw-bold">C</p>
                  </center>
                </div>
              </div>
            </>
          )}
          <p className="text-danger mt-2 ps-4">Selected Hall : {halls}</p>
        </div>
      </div>
      {date === "25-11-2022" && halls === "A" ? (
        <div>
          <Swiper slidesPerView={3} spaceBetween={30} className="mySwiper mt-4">
            <SwiperSlide>
              <div
                onClick={() => setSession("9.00-10.00 AM")}
                className="session-card "
              >
                9.00-10.00 AM
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                onClick={() => setSession("10.00-11.00 AM")}
                className="session-card"
              >
                10.00-11.00 AM
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                onClick={() => setSession("11.00-12.00 NOON")}
                className="session-card"
              >
                11.00-12.00 NOON
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                onClick={() => setSession("12.00-1.00 PM")}
                className="session-card"
              >
                12.00-1.00 PM
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                onClick={() => setSession("1.00-2.00 PM")}
                className="session-card"
              >
                1.00-2.00 PM
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                onClick={() => setSession("2.00-6.00 PM")}
                className="session-card"
              >
                2.00-6.00 PM
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      ) : (
        <div></div>
      )}
      {date === "25-11-2022" && halls === "B" ? (
        <div>
        <Swiper slidesPerView={3} spaceBetween={30} className="mySwiper">
            <SwiperSlide>
              <div
                onClick={() => setSession("9.00-10.00 AM")}
                className="session-card"
              >
                9.00-10.00 AM
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                onClick={() => setSession("10.00-11.00 AM")}
                className="session-card"
              >
                10.00-11.00 AM
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                onClick={() => setSession("11.00-12.00 NOON")}
                className="session-card"
              >
                11.00-12.00 NOON
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                onClick={() => setSession("12.00-1.00 PM")}
                className="session-card"
              >
                12.00-1.00 PM
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                onClick={() => setSession("1.00-2.00 PM")}
                className="session-card"
              >
                1.00-2.00 PM
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                onClick={() => setSession("2.00-3.30 PM")}
                className="session-card"
              >
               2.00-3.30 PM
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                onClick={() => setSession("3.30-5.30 PM")}
                className="session-card"
              >
               3.30-5.30 PM
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      ) : (
        <div></div>
      )}
      {date === "26-11-2022" && halls === "A" ? (
        <div>
        <Swiper slidesPerView={3} spaceBetween={30} className="mySwiper">
            <SwiperSlide>
              <div
                onClick={() => setSession("9.00-10.30 AM")}
                className="session-card"
              >
                9.00-10.30 AM
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                onClick={() => setSession("10.30-12.00 NOON")}
                className="session-card"
              >
               10.30-12.00 NOON
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                onClick={() => setSession("12.00-01.30 PM")}
                className="session-card"
              >
               12.00-01.30 PM
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                onClick={() => setSession("1.30-2.00 PM")}
                className="session-card"
              >
                1.30-2.00 PM
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                onClick={() => setSession("3.00-3.30 PM")}
                className="session-card"
              >
               3.00-3.30 PM
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                onClick={() => setSession("3.30-4.00 PM")}
                className="session-card"
              >
               3.30-4.00 PM
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                onClick={() => setSession("4.00-4.30 PM")}
                className="session-card"
              >
               4.00-4.30 PM
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                onClick={() => setSession("4.30-5.00 PM")}
                className="session-card"
              >
               4.30-5.00 PM
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                onClick={() => setSession("5.00-6.00 PM")}
                className="session-card"
              >
              5.00-6.00 PM
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                onClick={() => setSession("6.00-7.30 PM")}
                className="session-card"
              >
              6.00-7.30 PM
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                onClick={() => setSession("7.30-10 PM")}
                className="session-card"
              >
              7.30-10.00 PM
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      ) : (
        <div></div>
      )}
      {date === "26-11-2022" && halls === "B" ? (
        <div>
          <Swiper slidesPerView={3} spaceBetween={30} className="mySwiper mt-4">
            <SwiperSlide>
              <div
                onClick={() => setSession("9.00-10.00 AM")}
                className="session-card "
              >
                9.00-10.00 AM
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                onClick={() => setSession("10.00-11.00 AM")}
                className="session-card"
              >
                10.00-11.00 AM
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                onClick={() => setSession("11.00-12.00 NOON")}
                className="session-card"
              >
                11.00-12.00 NOON
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                onClick={() => setSession("12.00-1.00 PM")}
                className="session-card"
              >
                12.00-1.00 PM
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                onClick={() => setSession("1.00-2.00 PM")}
                className="session-card"
              >
                1.00-2.00 PM
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                onClick={() => setSession("4.30-6.00 PM")}
                className="session-card"
              >
               4.30-6.00 PM
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      ) : (
        <div></div>
      )}
      {date === "26-11-2022" && halls === "C" ? (
        <div>
          <Swiper slidesPerView={3} spaceBetween={30} className="mySwiper mt-4">
            <SwiperSlide>
              <div
                onClick={() => setSession("9.00-10.00 AM")}
                className="session-card "
              >
                9.00-10.00 AM
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                onClick={() => setSession("10.00-11.00 AM")}
                className="session-card"
              >
                10.00-11.00 AM
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                onClick={() => setSession("11.00-12.30 PM")}
                className="session-card"
              >
                11.00-12.30 PM
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                onClick={() => setSession("12.30-1.30 PM")}
                className="session-card"
              >
                12.30-1.30 PM
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                onClick={() => setSession("1.30-2.30 PM")}
                className="session-card"
              >
                1.30-2.30 PM
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      ) : (
        <div></div>
      )}
      {date === "27-11-2022" && halls === "A" ? (
        <div>
          <Swiper slidesPerView={3} spaceBetween={30} className="mySwiper mt-4">
            <SwiperSlide>
              <div
                onClick={() => setSession("9.00-10.30 AM")}
                className="session-card "
              >
               9.00-10.30 AM
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                onClick={() => setSession("10.30-12.00 NOON")}
                className="session-card"
              >
                10.30-12.00 NOON
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                onClick={() => setSession("12.00-1.30 PM")}
                className="session-card"
              >
               12.00-1.30 PM
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                onClick={() => setSession("1.30-2.00 PM")}
                className="session-card"
              >
                1.30-2.00 PM
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                onClick={() => setSession("2.00-4.00 PM")}
                className="session-card"
              >
               2.00-4.00 PM
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                onClick={() => setSession("4.00-4.30 PM")}
                className="session-card"
              >
                4.00-4.30 PM
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      ) : (
        <div></div>
      )}
      {date === "27-11-2022" && halls === "B" ? (
        <div>
          <Swiper slidesPerView={3} spaceBetween={30} className="mySwiper mt-4">
            <SwiperSlide>
              <div
                onClick={() => setSession("9.00-10.00 AM")}
                className="session-card "
              >
                10.00-11.00 AM
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                onClick={() => setSession("11.00-12.00 NOON")}
                className="session-card"
              >
                11.00-12.00 NOON
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                onClick={() => setSession("12.00-1.00 PM")}
                className="session-card"
              >
                12.00-1.00 PM
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                onClick={() => setSession("1.00-2.00 PM")}
                className="session-card"
              >
                1.00-2.00 PM
              </div>
            </SwiperSlide>
           
          </Swiper>
        </div>
      ) : (
        <div></div>
      )}
      {date === "27-11-2022" && halls === "C" ? (
        <div>
          <Swiper slidesPerView={3} spaceBetween={30} className="mySwiper mt-4">
            <SwiperSlide>
              <div
                onClick={() => setSession("9.00-10.00 AM")}
                className="session-card "
              >
                9.00-10.00 AM
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                onClick={() => setSession("10.00-11.00 AM")}
                className="session-card"
              >
                10.00-11.00 AM
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                onClick={() => setSession("11.00-12.00 NOON")}
                className="session-card"
              >
                11.00-12.00 NOON
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                onClick={() => setSession("12.00-1.00 PM")}
                className="session-card"
              >
                12.00-1.00 PM
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                onClick={() => setSession("1.00-2.00 PM")}
                className="session-card"
              >
                1.00-2.00 PM
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      ) : (
        <div></div>
      )}
      <p className="text-danger">Session : {session}</p>

    <center> <button onClick={submit} className="btn btn-primary my-4">Submit</button></center> 

      <div className="event-display">
        <div className="event-list">
          <center>
            <AiOutlineAlignCenter />
          </center>
{list.map((data) => {
  return (
    <div className="event-detail-card">
{data.title}
<div className='row mt-4'>
            <div className='col-4'>
        <BsCalendarDateFill/> {data.date}
            </div>
            <div className='col-6'>
                <BiTime/> {data.session}
            </div>
            <div className='col-2'>
                <BiCurrentLocation/>{data.hall}
            </div>
            </div>
  
</div>
  )
})}
<p className='mt-4 p-4 fw-bold fs-5'>Description :</p>
    <p className='fw-bold ps-4'>Judges :</p>
        {judges.map((data) => {
          return (
            <div className="ps-4">
            
            <ul>
              <li>{data}  </li>
            </ul>

           
            </div>
          )
        })}  
        <p className='fw-bold ps-4'>Moderator :</p>
        {moderator.map((data) => {
          return (
            <div className="ps-4">
            <ul >
                <li>{data}</li>
              
            </ul>
            </div>
          )
        })}
       
        <p className='fw-bold ps-4'>Panelist :</p>
{panelist.map((data) => {
  return(
    <div className="ps-4">
    <ul>
                <li>{data}</li>
               
            </ul>
            </div>
  )
})}
<p className='fw-bold ps-4'>Convenor :</p>
{convenor.map((data) => {
  return(
    <div className="ps-4">
    <ul>
                <li>{data}</li>
               
            </ul>
            </div>
  )
})}
<p className='fw-bold ps-4'>Chair Person :</p>
{chairperson.map((data) => {
  return(
    <div className="ps-4">
    <ul>
                <li>{data}</li>
               
            </ul>
            </div>
  )
})}
                  
<center><h5 className=' pt-5 fw-bold'>Papers</h5></center>
<hr/>
{papers.map((data) => {
  return (
    <div className='paper-card p-2 my-3'>
    <p >{data.paperTitle}</p>
    <p className='text-danger'>{data.author}</p>
</div>
  )
})}
                 
<center><h5 className=' pt-5 fw-bold'>Topics :</h5></center>
<hr/>
{topic.map((data) => {
  return (
    <div className='paper-card p-2 my-3'>
    <p >{data.topicTitle[0]}</p>
    <p className='text-danger'>{data.speaker[0]}</p>
</div>
  )
})}

        </div>
      </div>
    </div>
  );
};

export default EventScreen;
