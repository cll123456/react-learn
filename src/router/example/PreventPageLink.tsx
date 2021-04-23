import React, { useState } from 'react'
import { BrowserRouter as Router, NavLink, Prompt, Route, RouteComponentProps, RouterProps, withRouter } from 'react-router-dom'

export default function PreventPageLink() {
  return (
    <div className='page'
      style={{ width: '500px', margin: '0 auto', border: '2px solid #abbcde' }}>
      <Router
        getUserConfirmation={
          (msg, cb) => {
            cb(window.confirm(msg))
          }
        }
      >
        <div
          style={{ position: 'fixed', top: '50%', left: '0', transform: 'translateY(-50%)' }}
        >
          <NavLink to='/page1' style={{ marginRight: '30px' }} activeStyle={{ color: '#f40' }}>组件1</NavLink>
          <NavLink to='/page2' activeStyle={{ color: '#f40' }}>组件2</NavLink>
        </div>
        <div>
          <Route path='/page1' component={Page1}></Route>
          <Route path='/page2' component={Page2}></Route>
        </div>
      </Router>
    </div>
  )
}


function Page1() {
  const [val, setVal] = useState('')
  return (<div className='page1' style={{ backgroundColor: 'lightsalmon' }}>
    <Prompt message={'是否确定跳转，数据没有保存，跳转后数据将会丢失'} when={val !== ''}></Prompt>
    <textarea
      value={val}
      style={{ width: '500px', fontSize: '2em', height: '300px' }}
      onChange={(e) => {
        setVal(e.target.value)
      }}
    ></textarea>
  </div>)
}


function Page2() {
  return (
    <div className='page2' style={{ backgroundColor: 'lightcoral' }}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. A facilis obcaecati libero, consequatur asperiores consequuntur doloribus officiis. Ea alias impedit nisi, quia autem, adipisci ratione labore exercitationem soluta sed reprehenderit quas dolorum quo? Culpa sit quidem reprehenderit ab? Minima, praesentium dicta. Aliquid dolor inventore cum quaerat aliquam voluptatem alias, dignissimos doloremque aspernatur eaque temporibus minima repellendus fugit molestias odio laboriosam voluptas in quis ipsa cupiditate sunt. Non, laudantium ratione? Molestiae qui illum assumenda exercitationem officia? Minima, minus quidem? Eum facilis autem harum consequuntur nostrum cum atque eligendi delectus! Dolorum, maxime repudiandae! Beatae ratione voluptatibus, accusantium fugiat aliquam, odio, sapiente quisquam corporis in autem numquam corrupti voluptate maiores expedita similique animi! Nobis amet, doloremque repudiandae non id ex nostrum? Odio rerum aut nulla officiis asperiores, vero dicta voluptates numquam fugiat molestiae voluptatem ipsum! Magnam amet culpa est quae odio aliquam nam excepturi cum itaque consequatur accusamus voluptatibus facilis deserunt ut aperiam, dolor veritatis inventore eos at eligendi harum unde non, dignissimos libero! Nisi impedit necessitatibus porro. Suscipit, aliquam exercitationem quo qui sunt vero maiores et, magni, est accusamus repellendus facilis reprehenderit repudiandae quae ipsa similique tenetur. Minus quos atque accusantium vel provident neque perferendis adipisci sunt, inventore expedita labore sapiente vitae.
    </div>
  )
}


interface I_PrompProps extends RouterProps, RouteComponentProps {
  when?: boolean,
  message?: string,
}

class _Promp extends React.PureComponent<I_PrompProps>{

  static defaultProps = {
    when: false,
    message: ''
  }

  private unblock!: undefined | (() => void)
  // 注册一个阻塞
  componentDidMount() {
    this.handleBlock()
  }



  componentDidUpdate(prevProps: I_PrompProps, prevState: I_PrompProps) {
    this.handleBlock();
  }

  componentWillUnmount() {
    if (this.unblock) {
      this.unblock();
    }
  }

  handleBlock = () => {
    if (this.props.when) {
      this.unblock = this.props.history.block(this.props.message)
    } else {
      if (this.unblock) {
        this.unblock();
      }
    }
  }

  render() {
    return null;
  }
}

const Promp = withRouter(_Promp)