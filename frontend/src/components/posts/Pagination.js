import styled from "styled-components";
import palette from "../../lib/styles/palette";
import Button from "../common/Button";

const PaginationNav = styled.nav`
  display: flex;
  position: relative;
  padding-top: 30px;
  /* height: 50px; */
  justify-content: center;
  align-items: center;
  gap: 4px;
`;

const PageButton = styled(Button)`
  border: none;
  border-radius: 8px;
  padding: 8px;
  margin: 0;
  background: ${palette.gray[2]};
  color: white;
  font-size: 1rem;

  &:hover {
    background: ${palette.gray[5]};
    cursor: pointer;
    transform: translateY(-2px);
  }

  &[disabled] {
    background: ${palette.gray[6]};
    cursor: revert;
    transform: revert;
  }

  &[aria-current] {
    background: ${palette.gray[7]};
    font-weight: bold;
    cursor: revert;
    transform: revert;
  }
`;

function Pagination({ total, limit, page, setPage }) {
  // total: 전체 데이터,
  // limit: 한페이지에 보여줄 데이터 - bookRender에서 관리됨
  // page:
  const numPages = Math.ceil(total / limit) < 6 ? Math.ceil(total / limit) : 5;
  const pageNumbers = [];
  for (let i = 1; i <= numPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <PaginationNav>
        <PageButton onClick={() => setPage(page - 1)} disabled={page === 1}>
          &lt;
        </PageButton>
        {pageNumbers.map((_, i) => (
          <PageButton
            key={i + 1}
            onClick={() => setPage(i + 1)}
            aria-current={page === i + 1 ? "page" : null}
          >
            {i + 1}
          </PageButton>
        ))}
        <PageButton
          onClick={() => setPage(page + 1)}
          disabled={page === numPages}
        >
          &gt;
        </PageButton>
      </PaginationNav>
    </>
  );
}

export default Pagination;

// https://www.daleseo.com/react-pagination/ 를 바탕으로 재구성
