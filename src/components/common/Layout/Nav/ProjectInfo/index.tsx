import * as S from "./style"
import Logo from '../../../../../pantry_logo.svg'
import { teamDataFe, teamDataBe } from "./teamData"
import TaskEl from "./TaskEl"

function ProjectInfo() {
  return (
    <S.allDiv>
      <S.titleDiv>미니프로젝트 FE X BE 6조</S.titleDiv>
      {/* <div><img src={Logo} /></div> */}
      <span>FE</span>
      <S.flexDiv>
        {teamDataFe.map((data) => (
          <S.contentA key={data.id} href={data.git}>
            <S.wrapperDiv>
              <img src={data.src} />
            </S.wrapperDiv>
            {data.name}
            {/* <TaskEl task={data.task} /> */}
          </S.contentA>
        ))}
      </S.flexDiv>
      <span>BE</span>
      <S.flexDiv>
        {teamDataBe.map((data) => (
          <S.contentA key={data.id} href={data.git}>
            <S.wrapperDiv>
              <img src={data.src} />
            </S.wrapperDiv>
            {data.name}
            {/* <TaskEl task={data.task} /> */}
          </S.contentA>
        ))}
      </S.flexDiv>
    </S.allDiv>
  )
}

export default ProjectInfo