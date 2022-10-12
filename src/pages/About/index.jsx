import { GlobalStyle, Header1 } from "../../global/styled.tw"
import Profile from "../../utils/img/profile.png"


export default function About(){
  return(
    <GlobalStyle>
      <Header1>About</Header1>
      <article className="flex justify-center gap-8 w-4/5">
        <p className="w-1/2 self-center text-justify">Hi ! I'm Laeti, freelancer
            graduated from LeWagon Tokyo in March 2022
            who speaks french, english and japanese,
            as well as Ruby, JavaScript and Python.
            Feel free to contact me if you have a project, I would be more than happy to contribuate.

            Recently, I am working on Python oriented data,
            because datas and AI are working for innovation and its positive impact
            on our society, so I want to be part of it.
        </p>

        <img src={Profile} alt="Laeti-dev profile" className="w-1/4 rounded-md" />
      </article>
    </GlobalStyle>
  )
}
