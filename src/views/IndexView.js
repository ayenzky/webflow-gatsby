/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [
  fetch("https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.4.1.min.220afd743d.js?site=5efa3799cd0be118fdb1b23c").then(body => body.text()),
  fetch("js/webflow.js").then(body => body.text()),
]

let Controller

class IndexView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('..\controllers/IndexController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = IndexView

        return Controller
      }

      throw e
    }
  }

  componentDidMount() {
    scripts.concat(Promise.resolve()).reduce((loaded, loading) => {
      return loaded.then((script) => {
        new Function(`
          with (this) {
            eval(arguments[0])
          }
        `).call(window, script)

        return loading
      })
    })
  }

  render() {
    const proxies = Controller !== IndexView ? transformProxies(this.props.children) : {

    }

    return (
      <span>
        <style dangerouslySetInnerHTML={{ __html: `
          @import url(D:\\css\\normalize.css);
          @import url(D:\\css\\webflow.css);
          @import url(D:\\css\\horizontal-scroll-demo-clone.webflow.css);
        ` }} />
        <span className="af-view">
          <div>
            <div id="sec01" className="af-class-the-hero-section af-class-limited">
              <div className="af-class-affiliate-embed-2 w-embed w-iframe"><iframe src="https://vb-affiliate.Webflow.io" width="100%" height="100
        px" frameBorder={0} /></div>
              <div className="af-class-div-block-4">
                <h1 className="af-class-sites-title">The Sticky Section<br />with Horizontal Scrolling Template (CMS)</h1>
                <p className="af-class-subtitle">The next section takes up the full viewport and will stick on top, until the horizontal scrolling ends. The section then unsticks and the scrolling resumes. It works with the CSS&nbsp;Sticky property and IX2 for the horizontal scrolling.</p>
                <p className="af-class-subtitle">Check the structure and instructions down the page.</p>
              </div><a href="https://webflow.com/website/Starry-Skies-Sticky-Horizontal-Scroll-Demo" className="af-class-button w-button">Duplicate this template</a>
              <p className="af-class-subtitle af-class-action"><span className="af-class-text-span-4">↓</span> Scroll Down to see the effect in action</p><a href="index.html" aria-current="page" className="w--current">Check the static (non-CMS) version</a></div>
            <div id="sec01" data-w-id="df49fa37-3835-effb-c28f-9bd7be4b3ccc" className="af-class-the-height-400vh-section">
              <div className="af-class-the-sticky-div">
                <h1 className="af-class-the-sticky-div-title">Sticky section<br />‍<span className="af-class-text-span-2">With horizontal scrolling</span></h1>
                <div data-w-id="fc76b0fe-bba3-ae05-aa44-5c533e23a455" className="af-class-night-sky-fixed-background" />
                <div className="af-class-the-overflow-hidden-mask">
                  <div data-w-id="9c0e3bb9-070a-4584-1466-9f7fca476da2" app-stock="scrollable" className="af-class-the-width-400vh-scrollable-div">
                    <div className="af-class-the-content">
                      <div className="af-class-a-block">
                        <div className="af-class-gradient" />
                      </div>
                      <div className="af-class-a-block">
                        <div className="af-class-gradient" />
                      </div>
                      <div className="af-class-a-block">
                        <div className="af-class-gradient" />
                      </div>
                      <div className="af-class-a-block">
                        <div className="af-class-gradient" />
                      </div>
                      <div className="af-class-a-block">
                        <div className="af-class-gradient" />
                      </div>
                      <div className="af-class-a-block">
                        <div className="af-class-gradient" />
                      </div>
                      <div className="af-class-a-block">
                        <div className="af-class-gradient" />
                      </div>
                      <div className="af-class-a-block">
                        <div className="af-class-gradient" />
                      </div>
                      <div className="af-class-a-block">
                        <div className="af-class-gradient" />
                      </div>
                      <div className="af-class-a-block">
                        <div className="af-class-gradient" />
                      </div>
                      <div className="af-class-a-block">
                        <div className="af-class-gradient" />
                      </div>
                      <div className="af-class-a-block">
                        <div className="af-class-gradient" />
                      </div>
                      <div className="af-class-a-block">
                        <div className="af-class-gradient" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="sec01" className="af-class-the-footer-section">
              <div className="af-class-div-block-4">
                <p className="af-class-subtitle af-class-footer-subtitle">The width of the content div is equal to the height of its parent section. The parent section is used as a trigger and controller for the horizontal scrolling of the content div. Having those two elements the same scrollable size makes the feeling of the scrolling natural. By shortening or enlarging the Scroll Trigger div, you can accelerate or decelerate the horizontal scrolling effect.</p>
              </div>
              <div className="af-class-div-block-5"><img src="images/Asset-120.svg" alt className="af-class-image-2" /><img src="images/Webflow---✓-Horizontal-scrolling-with-Sticky-menu-2019-01-22-11-00-55.png" alt className="af-class-image-3" /></div>
            </div>
            {/* [if lte IE 9]><![endif] */}
          </div>
        </span>
      </span>
    )
  }
}

export default IndexView

/* eslint-enable */