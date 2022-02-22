use anchor_lang::accounts::loader::Loader;
use anchor_lang::prelude::*;

use solana_program::program::invoke;
use spl_token::*;

declare_id!("GJjnTihraGQtMPZAiRoWRyEgAf8pxPtg6cQqQPvE2BDX");

#[program]
mod mysolanaapp {
    use super::*;

    pub fn create_user(
        ctx: Context<CreateUser>,
        name: String,
        initial_count: u16,
        timestamp: String,
        first_img: String,
        second_img: String,
    ) -> Result<()> {
        ctx.accounts.user.name = name;
        ctx.accounts.user.timestamp = timestamp;
        ctx.accounts.user.is_confirmed = true;
        ctx.accounts.user.initial_count = initial_count;
        ctx.accounts.user.further_count = initial_count + 1;
        ctx.accounts.user.first_img = first_img;
        ctx.accounts.user.second_img = second_img;
        ctx.accounts.user.authority = *ctx.accounts.authority.key;
        ctx.accounts.user.bump = *ctx.bumps.get("user").unwrap();

        Ok(())
    }
    pub fn update_user(
        ctx: Context<UpdateUser>,
        timestamp: String,
        current_count: u16,
        first_img: String,
        second_img: String,
    ) -> Result<()> {
        ctx.accounts.user.timestamp = timestamp;
        ctx.accounts.user.is_confirmed = true;
        ctx.accounts.user.further_count = current_count + 1;
        ctx.accounts.user.first_img = first_img;
        ctx.accounts.user.second_img = second_img;
        Ok(())
    }
    pub fn transfer_tokens(ctx: Context<TransferTokens>, amount: u64) -> ProgramResult {
        let from_info = &mut ctx.accounts.authority;
        let from_token_info = &mut ctx.accounts.from;
        let to_token_info = &mut ctx.accounts.to;
        let token_info = &mut ctx.accounts.token_program;

        let ix = spl_token::instruction::burn(
            token_info.key,
            from_token_info.key,
            to_token_info.key,
            from_info.key,
            &[from_info.key],
            amount,
        )?;
        invoke(
            &ix,
            &[
                from_token_info.clone(),
                to_token_info.clone(),
                from_info.clone(),
                token_info.clone(),
            ],
        )?;

        Ok(())
    }
    pub fn mint_tokens(ctx: Context<MintTokens>, amount: u64) -> ProgramResult {
        let from_info = &mut ctx.accounts.authority;
        let from_token_info = &mut ctx.accounts.from;
        let mint_token_info = &mut ctx.accounts.mint;
        let token_info = &mut ctx.accounts.token_program;

        let ix = spl_token::instruction::mint_to(
            token_info.key,
            mint_token_info.key,
            from_token_info.key,
            from_info.key,
            &[from_info.key],
            amount,
        )?;
        invoke(
            &ix,
            &[
                from_token_info.clone(),
                mint_token_info.clone(),
                from_info.clone(),
                token_info.clone(),
            ],
        )?;

        Ok(())
    }
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

#[derive(Accounts)]
pub struct TransferTokens<'info> {
    #[account(signer)]
    pub authority: AccountInfo<'info>,
    #[account(mut)]
    pub from: AccountInfo<'info>,
    #[account(mut)]
    pub to: AccountInfo<'info>,
    pub token_program: AccountInfo<'info>,
}

#[derive(Accounts)]
pub struct MintTokens<'info> {
    #[account(signer)]
    pub authority: AccountInfo<'info>,
    #[account(mut)]
    pub from: AccountInfo<'info>,
    #[account(mut)]
    pub mint: AccountInfo<'info>,
    pub token_program: AccountInfo<'info>,
}

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
    first_img: String,
    second_img: String,
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
