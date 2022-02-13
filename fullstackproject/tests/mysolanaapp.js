const anchor = require("@project-serum/anchor");
const assert = require("assert");
const { PublicKey } = anchor.web3;

describe("chat", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.Provider.env());

  // Program client handle.
  const program = anchor.workspace.Mysolanaapp;

  // Chat room account.
  const breedingRoom = anchor.web3.Keypair.generate();

  it("Creates a user", async () => {
    const authority = program.provider.wallet.publicKey;
    const [user, bump] = await PublicKey.findProgramAddress(
      [authority.toBuffer()],
      program.programId
    );
    await program.rpc.createUser("My User", 2, "2021-02-10", {
      accounts: {
        user,
        authority,
        systemProgram: anchor.web3.SystemProgram.programId,
      },
    });
    const account = await program.account.user.fetch(user);
    console.log("====================", user.toString())
    console.log("====================", account);
    assert.ok(account.name === "My User");
    assert.ok(account.authority.equals(authority));
  });

  it("Update created user", async () => {
    const authority = program.provider.wallet.publicKey;
    const [user, bump] = await PublicKey.findProgramAddress(
      [authority.toBuffer()],
      program.programId
    );
    await program.rpc.updateUser("2022-2-11", 3, {
      accounts: {
        user,
      },
    });
    const account = await program.account.user.fetch(user);
    console.log("updated account: ", account);
    // assert.ok(account.name === "Updated User");
    assert.ok(account.authority.equals(authority));
  });
});