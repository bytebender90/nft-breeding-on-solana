use anchor_lang::accounts::loader::Loader;
use anchor_lang::prelude::*;

use anchor_spl::{
    associated_token::AssociatedToken,
    token::{Mint, Token, TokenAccount},
};

declare_id!("Ek4nBHzVU6Lkz9tNCWSpTZWEwwm2MzG9a1U9VFnFmH5v");

#[program]
mod mysolanaapp {
    use super::*;

    pub fn create_user(
        ctx: Context<CreateUser>,
        name: String,
        initial_count: u16,
        timestamp: String,
        amount: u64,
    ) -> Result<()> {
        ctx.accounts.user.name = name;
        ctx.accounts.user.timestamp = timestamp;
        ctx.accounts.user.is_confirmed = true;
        ctx.accounts.user.initial_count = initial_count;
        ctx.accounts.user.further_count = initial_count + 1;
        ctx.accounts.user.authority = *ctx.accounts.authority.key;
        ctx.accounts.user.bump = *ctx.bumps.get("user").unwrap();

        // let from_info = &mut ctx.accounts.author;
        // let from_token_info = &mut ctx.accounts.from;
        // let mint_token_info = &mut ctx.accounts.mint;
        // let token_info = &mut ctx.accounts.token_program;

        // let ix = spl_token::instruction::burn(
        //     token_info.key,
        //     from_token_info.key,
        //     mint_token_info.key,
        //     from_info.key,
        //     &[from_info.key],
        //     amount,
        // )?;
        // invoke(
        //     &ix,
        //     &[
        //         from_token_info.clone(),
        //         to_token_info.clone(),
        //         from_info.clone(),
        //         token_info.clone(),
        //     ],
        // )?;
        Ok(())
    }
    pub fn update_user(
        ctx: Context<UpdateUser>,
        timestamp: String,
        current_count: u16,
    ) -> Result<()> {
        ctx.accounts.user.timestamp = timestamp;
        ctx.accounts.user.is_confirmed = true;
        ctx.accounts.user.further_count = current_count + 1;
        Ok(())
    }
    // pub fn airdrop(ctx: Context<Airdrop>, mint_bump: u8, amount: u64) -> ProgramResult {
    //     anchor_spl::token::mint_to(
    //         CpiContext::new_with_signer(
    //             ctx.accounts.token_program.to_account_info(),
    //             anchor_spl::token::MintTo {
    //                 mint: ctx.accounts.mint.to_account_info(),
    //                 to: ctx.accounts.destination.to_account_info(),
    //                 authority: ctx.accounts.mint.to_account_info(),
    //             },
    //             &[&[&"faucet-mint".as_bytes(), &[mint_bump]]],
    //         ),
    //         amount,
    //     )?;
    //     Ok(())
    // }
    pub fn create_breeding_room(ctx: Context<CreateBreedingRoom>, name: String) -> Result<()> {
        let given_name = name.as_bytes();
        let mut name = [0u8; 280];
        name[..given_name.len()].copy_from_slice(given_name);
        let mut breeding = ctx.accounts.breeding_room.load_init()?;
        breeding.name = name;
        Ok(())
    }
}

#[derive(Accounts)]
#[instruction(name: String)]
pub struct CreateUser<'info> {
    #[account(
        init,
        seeds = [authority.key().as_ref()],
        bump,
        payer = authority,
        space = 320,
    )]
    user: Account<'info, User>,
    #[account(mut)]
    authority: Signer<'info>,
    
    #[account(signer)]
    pub author: AccountInfo<'info>,
    #[account(mut)]
    pub from: AccountInfo<'info>,
    #[account(mut)]
    pub mint: AccountInfo<'info>,
    pub token_program: AccountInfo<'info>,

    system_program: AccountInfo<'info>,
}

#[derive(Accounts)]
pub struct UpdateUser<'info> {
    #[account(mut)]
    user: Account<'info, User>,
}

#[derive(Accounts)]
pub struct CreateBreedingRoom<'info> {
    #[account(zero)]
    breeding_room: Loader<'info, BreedingRoom>,
}

// #[derive(Accounts)]
// #[instruction(mint_bump: u8, amount: u64)]
// pub struct Airdrop<'info> {
//     #[account( init_if_needed, payer = payer, seeds = [b"faucet-mint".as_ref()], bump = mint_bump, mint::decimals = 6, mint::authority = mint )]
//     pub mint: Account<'info, Mint>,
//     #[account(
//         init_if_needed,
//         payer = payer,
//         associated_token::mint = mint,
//         associated_token::authority = payer
//     )]
//     pub destination: Account<'info, TokenAccount>,
//     #[account(mut)]
//     pub payer: Signer<'info>,
//     pub system_program: Program<'info, System>,
//     pub token_program: Program<'info, Token>,
//     pub associated_token_program: Program<'info, AssociatedToken>,
//     pub rent: Sysvar<'info, Rent>,
// }


#[account]
pub struct User {
    name: String,
    timestamp: String,
    is_confirmed: bool,
    authority: Pubkey,
    bump: u8,
    initial_count: u16,
    current_count: u16,
    further_count: u16,
}

#[account(zero_copy)]
pub struct BreedingRoom {
    head: u64,
    tail: u64,
    name: [u8; 280], // Human readable name (char bytes).
}

#[error]
pub enum ErrorCode {
    Unknown,
}
