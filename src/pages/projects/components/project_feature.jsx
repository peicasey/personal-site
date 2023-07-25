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
      <div className="h-[260px] w-full bg-cover filter brightness-75 bg-[url('./carousel/tao.png')]"></div>
    </div>
    <div>
      <div className="h-[260px] w-full bg-cover bg-center bg-[url('./carousel/revs.png')]"></div>
    </div>
    <div>
      <div className="h-[260px] w-full bg-cover bg-[url('./carousel/breakfree.png')]"></div>
    </div>
    <div>
      <div className="h-[260px] w-full bg-cover bg-[url('./carousel/thrivetogether.png')]"></div>
    </div>
  </Carousel>
);

export default Project_Feature;