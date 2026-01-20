import React from 'react'

const Card = (props) => {
  return (
    <div className="h-[440px] w-[300px] bg-white relative p-3 rounded-xl shadow-xl/20">
          <div className="h-35 w-full  bg-center bg-cover rounded-xl overflow-hidden mt-5">
              <img src={props.background} alt="" />
      </div>
      <div className="h-50 w-full absolute top-25 flex flex-col items-center p-3">
        <img
          src={props.image}
          alt=""
          className="h-30 w-30 rounded-full "
        />
              <h3 className="text-lg font-bold">{props.user}</h3>
        <p className="text-sm text-center mb-5">
            {props.superpower}
        </p>
        <div className="w-full flex justify-evenly text-sm font-semibold">
                  <p>{ props.like}</p>
                  <p>{ props.post}</p>
                  <p>{ props.view}</p>
        </div>
        <div className="w-full flex justify-evenly text-sm font-semibold mb-5 pl-1">
          <p>Likes</p>
          <p>Posts</p>
          <p>Views</p>
        </div>
        <div className='w-full flex justify-evenly text-lg'>
          <i class="ri-instagram-line"></i>
          <i class="ri-twitter-x-line"></i>
          <i class="ri-threads-line"></i>
        </div>
      </div>
    </div>
  );
}

export default Card
