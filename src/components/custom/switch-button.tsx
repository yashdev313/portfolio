import "./switch-button.css"

export function SwitchButton() {

  return (
    <>
<label class="switch">
  <input type="checkbox"/>
  <span class="slider round"></span>
</label>

<label class="switch">
  <input type="checkbox" checked/>
  <span class="slider round"></span>
</label>

    </>
  )
}

export default App



