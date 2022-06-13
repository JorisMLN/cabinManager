import { FC } from 'react';
import Header from './Header';
import Footer from './Footer';

export interface ComponentsProps {
  child: JSX.Element
}

const WithHeaderAndFooter: FC<ComponentsProps> = ({ child }) => {

  return (
    <div className="whafCapsule">
      <Header />
      {child}
      <Footer />
    </div>
  )
}

export default WithHeaderAndFooter;

