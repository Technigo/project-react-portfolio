import React from 'react'
import { SectionHeader } from './styled/SectionHeader'

export const Thoughts = () => {
  return (
    <section className="outer-wrapper" id="my-thoughts">
      <div className="inner-wrapper">
        <SectionHeader>THOUGHTS ON CODE</SectionHeader>
        <div className="cardholder">
          <div className="card">
            <div className="card-img">
              <img src="img/background-image.jpg" alt="apple logo" />
            </div>
            <div className="card-text">
              <h4>Article title</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea quidem!
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-img">
              <img src="img/background-image.jpg" alt="apple logo" />
            </div>
            <div className="card-text">
              <h4>Article title</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea quidem!
              </p>
            </div>
          </div>
        </div>
        <h3 className="subsection-headings">MORE THOUGHTS</h3>
        <div className="other-project">
          <p><span className="other-project-title">DATE</span> Article title.</p>
        </div>
        <div className="other-project">
          <p><span className="other-project-title">DATE</span> Article title.</p>
        </div>
      </div>
    </section>
  )
}