import { useParams } from 'react-router-dom';

const Test = () => {
  const { id } = useParams();
  console.log('Product ID:', id);
  return <div>Product ID: {id}</div>;
};

export default Test;
