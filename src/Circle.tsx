import './Circle.css'

interface CircleProps {
  positionTop:string
  positionLeft:string
  size:string
  spin:number
  unSpinIt:any
}


export const Circle = ({positionTop, positionLeft, size, spin, unSpinIt}:CircleProps) => {

  const styleObj = {
    top: `${positionTop}`,
    left: `${positionLeft}`,
    height: `${size}`,
    width: `${size}`,
  }

  return (

    <span className="circle" style={styleObj} 
      onAnimationEnd={() => unSpinIt()}
      data-spin={spin}>
    </span>
  );
}