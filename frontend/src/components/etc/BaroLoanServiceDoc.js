import React from "react";
import styled from "styled-components";
import Button from "../common/Button";
import palette from "../../lib/styles/palette";

const SuggestWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const SuggestBtn = styled(Button)`
  background-color: ${palette.blue[4]};
  &:hover {
    background-color: ${palette.blue[8]};
  }
`;

function BaroLoanServiceDoc() {
  return (
    <>
      <h2>『희망도서 서비스』 란? </h2>
      <ul>
        <li>
          수원시도서관에 원하는 자료가 없을 경우, 이용자가 원하는 자료를 신청할
          수 있는 서비스
        </li>
        <li>
          신청기간 : 희망도서 바로대출서비스 : 2022년 1월 3일(월) ~ 2022년 10월
          31일(월)
          <p className='textIndent6'>
            도서관 희망도서 서비스 : 2022년 1월 3일(월) ~ 2022년 10월 31일(월)
          </p>
        </li>
        <li>신청대상 : 수원시 도서관 정회원</li>
        <li> 신청권수 : 월 1인 2권</li>
        <li>
          신청방법 : 도서관 또는 서점 중 대출하고 싶은 곳을 선택하여 신청
          <p className='textIndent2'>
            <span className='blueText'>
              - 도서관 희망도서 서비스 (도서관 대출)
            </span>
          </p>
          <p className='textIndent2'>
            : 희망도서 신청 ⇒ 도서관에서 구입·등록 ⇒
            <span className='orangeText semiBorder'>도서관에서 대출/반납</span>
          </p>
          <p className='textIndent2'>
            <span className='blueText'>
              - 희망도서 바로대출 서비스 (서점 대출)
            </span>
          </p>
          <p className='textIndent2'>
            : 희망도서 신청 ⇒ 승인 ⇒{" "}
            <span className='orangeText semiBorder'>서점대출 ⇒ 서점반납 </span>⇒
            도서관 구입·등록
          </p>
        </li>
        ※ 도서관 희망도서 서비스: 도서관에서 구입 후 대출(12일~18일 소요됨)
        <p>
          희망도서 바로대출 서비스: 서점 소장시 바로 대출(빠른 대출 필요시 신청)
        </p>
      </ul>
      <table>
        <thead>
          <tr>
            <th colSpan='2'>희망도서 서비스</th>
          </tr>
          <tr>
            <th>도서관 희망도서 서비스</th>
            <th>희망도서 바로대출 서비스</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <p className='border'>
                · SMS(알림톡 또는 문자) 수신 후 도서관에서 대출
              </p>
              <p>{`<신청제외도서>`}</p>
              <p>- 각 도서관에서 이미 소장중인 경우</p>
              <p className='blueText3'>
                ※ 수원시도서관 상호대차 서비스로 대출가능도서(단, 어린이도서
                제외)
              </p>
              <p>
                - 발행년 <span className='orangeText'>5년 이상 도서</span>
              </p>
              <p>
                - <span className='orangeText'>5만원 초과 도서</span>
              </p>
              <p>
                <span className='orangeText'>
                  기타 신청 제외 도서는 상세이용안내 참조
                </span>
              </p>
              <p className='blueText border'>· 대출기간 : 14일(연장가능)</p>
            </td>
            <td>
              <p className='border'>
                · SMS(알림톡 또는 문자) 수신 후 서점에서 바로 대출
              </p>
              <p>{`<신청제외도서>`}</p>
              <p>- 각 도서관에서 이미 소장중인 경우 </p>
              <p className='blueText3'>
                ※ 수원시도서관 상호대차 서비스로 대출가능도서(단, 어린이도서
                제외)
              </p>
              <p>
                - 발행년 <span className='orangeText'>1년 이상 </span>도서
              </p>
              <p>
                - <span className='orangeText'> 3만원 초과 </span>도서
              </p>

              <p>
                -{" "}
                <span className='orangeText'>
                  기타 신청 제외 도서는 상세이용안내 참조
                </span>
              </p>
              <p className='blueText border'>· 대출기간 : 14일(연장불가)</p>
              <p className='blueText3 textIndent2'>
                ※ 미대출시 : 다음달 희망도서 바로대출 서비스 신청 제한
              </p>
            </td>
          </tr>
        </tbody>
      </table>
      <SuggestWrap>
        <SuggestBtn>희망도서 서비스 신청하기</SuggestBtn>
      </SuggestWrap>
    </>
  );
}

export default BaroLoanServiceDoc;
