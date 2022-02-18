import { Fragment } from "react";
import { Col, Modal, Row, Spinner } from "react-bootstrap";
import { NFTItem } from "./NFTItem";

const NftListsModal = (props) => {
  const { setParentNft, showModal, setShowModal } = props;
  let nftLists = props.nftLists || [];
  if(nftLists.length) {
    nftLists = nftLists.filter(x => x.data.symbol == "ED" && x.data.name.includes("Ehecatl Dragon"))
  }

  return (
    <Fragment>
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        size="lg"
        scrollable={true}
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            NFTs Owned By Your Wallet
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {nftLists.length > 0 ? (
            <Row>
              {nftLists.map((item, index) => {
                if (item.data.uri === "") return null;
                return item.data.symbol == "ED" && item.data.name.includes("Ehecatl Dragon") &&  (
                  <Col md="4" key={index}>
                    <NFTItem item={item} setParentNft={setParentNft} />
                  </Col>
                );
              })}
            </Row>
          ) : (
            <div>
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </div>
          )}
        </Modal.Body>
      </Modal>
    </Fragment>
  );
};

export default NftListsModal;
