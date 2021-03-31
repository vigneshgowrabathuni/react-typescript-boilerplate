import { useStoreActions, useStoreState } from 'easy-peasy';
import React, { FunctionComponent, ReactElement, useEffect } from 'react';
import LandingImage from '../../assets/images/illustration-3.svg';

const Home: FunctionComponent = (): ReactElement => {
  const getData = useStoreActions((actions: any) => actions.fetchData);
  const values = useStoreState((state: any) => state.values);

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(values, 'values');

  return (
    <div data-testid="home-page" style={{ backgroundColor: '#f8fbfe' }}>
      <div className="container">
        <div className="row row-grid align-items-center">
          <div className="col-12 col-md-5 col-lg-6 order-md-2 text-center">
            {/* <!-- Image --> */}
            <figure className="w-100">
              <img alt="" src={LandingImage} className="img-fluid mw-md-120" />
            </figure>
          </div>
          <div className="col-12 col-md-7 col-lg-6 order-md-1 pr-md-5">
            {/* <!-- Heading --> */}
            <h1 className="display-4 text-center text-md-left mb-3">
              It's a simple Boilerplate for <strong className="text-primary">React Project</strong>
            </h1>
            {/* <!-- Text --> */}
            <p className="lead text-center text-md-left text-muted">
              React Js, Typescript, easy-peasy, React Testing Library, SCSS preprocessor
            </p>
          </div>
        </div>
      </div>
      <div className="position-relative" id="footer-main">
        <div className="footer pt-lg-7 footer-dark bg-dark">
          {/* <!-- Footer --> */}
          <div className="container pt-4">
            <div className="row text-white">
              <hr className="divider divider-fade divider-dark my-4" />
              <div className="row align-items-center justify-content-md-between pb-4">
                <div className="col-md-12">
                  <div className="copyright text-sm font-weight-bold text-center">
                    © 2021{' '}
                    <a href="" className="font-weight-bold" target="_blank">
                      {values.name}
                    </a>
                    . All rights reserved
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
