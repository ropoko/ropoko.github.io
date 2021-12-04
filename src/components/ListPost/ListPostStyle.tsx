import styled from 'styled-components'

export const ListPostStyle = styled.div`
  margin: 3rem auto;
  width: 60%;
  min-width: 60%;
  max-width: 95%;

  padding: 0 0.5rem;

  h1 {
    font-size: 3rem;
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  header section h1 {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding-bottom: 0.8rem;
    border-bottom: 1px solid rgba(250, 250, 250, 0.4);
  }

  footer .tags a {
    padding: 0.2rem;
    margin: 0 0.2rem;
    text-decoration: none;

    color: #d2259a;
    border: #cfcfcf 1px solid;
  }

  a {
    color: ${props => props.theme.colors.highlight};
    transition: font-size 0.2s;
  }

  a:hover {
    text-decoration: underline;
  }

  @media (max-width: 1080px) {
    width: 80%;
  }

  @media (max-width: 720px) {
    width: 95%;
  }

  @media (max-width: 530px) {
    header section h1 {
      width: 270px;
    }
  }
`