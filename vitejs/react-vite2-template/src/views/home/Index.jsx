import { Button } from 'antd'
import module from './index.module.less'

export default function Home() {
  const navigate = useNavigate() // 编程式跳转
  return (
    <div className={module.home}>
      <h1>这是首页</h1>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
      </ul>
      <Button
        type="primary"
        onClick={() => {
          navigate('/about/1?test=2&hello=world', {
            state: {
              test: 1,
            },
          })
        }}
      >
        跳转到about页面
      </Button>
    </div>
  )
}
