import { Carousel } from 'antd';


const contentStyle = {
  height: '260px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: 'gray',
};

const Project_Feature = () => (
  <Carousel autoplay>
    <div>
      <div className="h-[260px] w-full bg-cover filter brightness-75 bg-[url('./tao.png')]"></div>
    </div>
    <div>
      <div className="h-[260px] w-full bg-cover bg-center bg-[url('./revs.png')]"></div>
    </div>
    <div>
      <div className="h-[260px] w-full bg-cover bg-[url('./breakfree.png')]"></div>
    </div>
    <div>
      <div className="h-[260px] w-full bg-cover bg-[url('./thrivetogether.png')]"></div>
    </div>
  </Carousel>
);

export default Project_Feature;