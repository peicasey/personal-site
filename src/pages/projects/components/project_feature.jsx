import { Carousel } from 'antd';

const contentStyle = {
  height: '260px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#f59e0b',
};

const Project_Feature = () => (
  <Carousel autoplay>
    <div>
      <h3 style={contentStyle}>1</h3>
    </div>
    <div>
      <h3 style={contentStyle}>2</h3>
    </div>
    <div>
      <h3 style={contentStyle}>3</h3>
    </div>
    <div>
      <h3 style={contentStyle}>4</h3>
    </div>
  </Carousel>
);

export default Project_Feature;