import React from 'react';

export default function UiBoxC(title, desc, WrappedComponent) {
  return class PP extends React.Component {
    render() {
      return (
        <section className="code-box" id="">
          <section className="code-box-meta">
            {/* <div className="code-box-title">
              <a href="#">{title}</a>
            </div> */}
            <div>
              <p>{desc}</p>
            </div>
          </section>
          <section className="code-box-demo">
            <WrappedComponent {...this.props} />
          </section>
        </section>
      );
    }
  };
}
