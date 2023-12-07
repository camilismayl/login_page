import { Outlet } from 'react-router-dom';
import { usePublicLayoutStyles } from './public.style';
import classNames from 'classnames';

const PublicComponent = () => {
  const classes = usePublicLayoutStyles();

  const publicClasses = classNames({
    [classes.content]: true,
  });

  return (
    <div className={classes.public}>
      <div className={publicClasses}>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default PublicComponent;
