import { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import styled from "styled-components";

const ItemContainer = styled.div`
  max-width: 90vw;
`;

const Image = styled.img`
  height: auto;
  max-width: 100%;
`;

export function NFTItem({ item, setParentNft }) {
  const [NFTData, setNFTData] = useState(null);
  const [isLoading, setLoding] = useState(true);

  useEffect(() => {
    async function getData() {
      let data = {};
      try {
        data = await (await fetch(item?.data?.uri)).json();
        setLoding(false);
      } catch (err) {
        console.log("nft fetch error: ", err);
      }
      setTimeout(() => {
        setNFTData(data);
      }, 100)
    }
    getData();
  }, [item]);
  return (
    <ItemContainer className="text-center">
      <h4>{item.data.name}</h4>
      {isLoading ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        <Image
          src={NFTData?.image}
          alt="NFT"
          className="img-fluid img-responsive cusor-pointer"
          onClick={() => setParentNft({ ...item, NFTData })}
        />
      )}
    </ItemContainer>
  );
}
