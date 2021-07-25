import styled from 'styled-components';

export const Container = styled.div`
  width: 80%;
  margin: auto;

  .nav{
    display: flex;
    align-items: center;
    justify-content: space-between;

    .cart{
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  section {
    height: 100vh;
    width: 100%;
    background: #00FA9A;
    display: flex;
    justify-content: space-around;

    .product-content{
      display: grid;
      text-align: center;
      height: 300px;
      background: #fff;
      border-radius: 12px;
      padding: 12px;

    }
  }

  footer {
    height: 50px;
    padding: 25px;
    text-align: center;
    background-color: #363636;
    color: #fff;
  }
`