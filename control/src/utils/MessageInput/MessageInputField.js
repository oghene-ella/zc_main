import styled from "styled-components"
import Lightning from "../assets/lightning.svg"
import Border from "../assets/border.svg"
import Bold from "../assets/bold.svg"
import Italic from "../assets/italic.svg"
import Link from "../assets/link.svg"
import List from "../assets/list.svg"
import AtSign from "../assets/at-sign.svg"
import Clip from "../assets/clip.svg"
import Bigborder from "../assets/bigborder.svg"
import Dropdown from "../assets/dropdown.svg"
import Send from "../assets/send.svg"
import UnstyledButton from "../UnstyledButton"

import { useState } from "react"
// import Send from "../assets/comments/goto.svg";
const CommentBox = ({ sendMessageHandler }) => {
  const [text, setText] = useState("")
  const [textIsBold, setTextBold] = useState(false)
  const [textIsItalic, setTextItalic] = useState(false)

  const generateMessageFormatOptions = () => {
    const options = []
    if (textIsBold) options.push("bold")
    if (textIsItalic) options.push("italic")
  }

  const handleClickSendMessage = () => {
    if (text) {
      const newMessage = {
        message: text,
        formatOptions: [...generateMessageFormatOptions()]
      }
      setText("")
      setTextBold(false)
      setTextItalic(false)
      sendMessageHandler(newMessage)
    }
  }

  return (
    <Wrapper>
      <InputWrapper>
        <Input
          type="text"
          placeholder="Send a message"
          value={text}
          onChange={ev => setText(ev.target.value)}
        />

        <SendWrapper>
          <div style={{ display: "flex" }}>
            <div style={{ display: "flex", gap: "11px", alignItems: "center" }}>
              <img src={Lightning} alt="" />
              <img src={Border} alt="" />
              <img src={Bold} alt="" onClick={() => setTextBold(!textIsBold)} />
            </div>
            <div
              style={{
                display: "flex",
                gap: "19px",
                marginLeft: "22px",
                alignItems: "center"
              }}
            >
              <UnstyledButton>
                <img
                  src={Italic}
                  alt=""
                  onClick={() => setTextItalic(!textIsItalic)}
                />
              </UnstyledButton>
              <UnstyledButton>
                <img src={Link} alt="" />
              </UnstyledButton>
              <UnstyledButton>
                <img src={List} alt="" />
              </UnstyledButton>
            </div>
          </div>
          <div style={{ display: "flex", gap: "15px", marginLeft: "auto" }}>
            <UnstyledButton>
              <img src={AtSign} alt="" />
            </UnstyledButton>
            <UnstyledButton>
              <img src={Clip} alt="" onClick={handleClickSendMessage} />
            </UnstyledButton>
            <UnstyledButton>
              <img src={Send} alt="" />
            </UnstyledButton>
            <UnstyledButton>
              <img src={Bigborder} alt="" />
            </UnstyledButton>
            <UnstyledButton>
              {" "}
              <img src={Dropdown} alt="" />
            </UnstyledButton>
          </div>
        </SendWrapper>
      </InputWrapper>
    </Wrapper>
  )
}
export default CommentBox

const Wrapper = styled.div`
  padding-left: 16px;
  padding-right: 16px;
  display: flex;
  flex-direction: column;
  background-color: white;
`
const InputWrapper = styled.section`
  border: 1px solid hsla(0, 0%, 92%, 1);
  border-radius: 3px;
  /* padding-left: 8px;
padding-top: 8px;
padding-bottom: 8px; */
  /* border-bottom: 1px solid hsl(160, 100%, 86%); */
`
const SendWrapper = styled.section`
  padding: 10px 18px 15px 18px;
  display: flex;
  gap: 120px;
  align-items: center;
  padding-right: 18px;
  gap: 4px;
`
const Input = styled.input`
  display: block;
  border: none;
  padding: 18px 0 18px 12px;
  background-color: inherit;
  width: 100%;
  &:focus {
    border: none;
    outline: none;
  }
  &::placeholder {
    font-weight: 400;
    color: hsla(0, 0%, 75%, 1);
    font-size: ${15 / 16}rem;
  }
`
const SendButton = styled.button`
  padding: 4px 8px;
  border: none;
  border-radius: 4px;
  background-color: hsl(160, 100%, 26%);
  color: white;
  font-weight: 700;
  font-size: 1rem;
`
