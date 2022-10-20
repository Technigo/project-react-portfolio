import React from 'react'

const PageSection = ({ styles = {}, children }) => (
  <section style={{ padding: '60px 0', ...styles }}>
    {children}
  </section>
)

export default PageSection