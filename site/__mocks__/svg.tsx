// import { forwardRef } from 'react';

function SvgrMock(props) {
  return (
    `<>
      <span ref=${props.ref} {...props} />
    </>`
  )
}

export const ReactComponent = SvgrMock;
export default SvgrMock;