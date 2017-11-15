export default function () {
  let tip = document.createElement('div')
  tip.innerText = 'Development'
  tip.style.fontSize = '24px'
  tip.style.color = 'white'
  tip.style.textShadow = '0 0 5px black'
  tip.style.position = 'absolute'
  tip.style.left = '10px'
  tip.style.bottom = '10px'
  tip.style.zIndex = 1000
  tip.style.pointerEvents = 'none'
  document.body.appendChild(tip)
}
