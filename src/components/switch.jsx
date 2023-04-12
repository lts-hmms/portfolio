import i18next from 'i18next';
import React, { useState } from 'react';
import SwitchSelector from "react-switch-selector";


function Switch() {
  const [toggle, setToggle] = useState()

  const toggleOnChange = () => {
    setToggle(!toggle);
    if(toggle === true) {
      i18next.changeLanguage('en');
    } else {
      i18next.changeLanguage('de');
    }
  }

  return (
    <div
  style={{
    height: 30,
    width: 100,
    margin: 25,
  }}
>
  <SwitchSelector
    border={null}
    initialSelectedIndex={0}
    onChange={() => toggleOnChange()}
    optionBorderRadius={null}
    options={[
      {
        label: 'en',
        value: true
      },
      {
        label: 'de',
        value: false
      }
    ]}
    selectedBackgroundColor="#000"
    wrapperBorderRadius={null}
  />
</div>

  )
}

export default Switch;