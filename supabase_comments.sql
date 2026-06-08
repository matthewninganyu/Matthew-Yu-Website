create extension if not exists pgcrypto;

create table if not exists public.comments (
  id uuid primary key default gen_random_uuid(),
  project_key text not null,
  author_name text not null default 'visitor',
  body text not null,
  status text not null default 'pending',
  created_at timestamptz not null default now(),
  constraint comments_project_key_check check (
    project_key in ('scoreshift', 'hvac-model', 'hvac-rag', 'othello-az', 'firefighter-bot')
  ),
  constraint comments_author_name_check check (
    author_name = 'visitor'
    or char_length(trim(author_name)) between 2 and 30
  ),
  constraint comments_body_length_check check (
    char_length(trim(body)) between 1 and 500
  ),
  constraint comments_status_check check (
    status in ('pending', 'approved', 'rejected')
  )
);

alter table public.comments
  drop constraint if exists comments_project_key_check;

alter table public.comments
  add constraint comments_project_key_check check (
    project_key in ('scoreshift', 'hvac-model', 'hvac-rag', 'othello-az', 'firefighter-bot')
  );

alter table public.comments
  drop constraint if exists comments_author_name_check;

alter table public.comments
  add constraint comments_author_name_check check (
    author_name = 'visitor'
    or char_length(trim(author_name)) between 2 and 30
  );

create index if not exists comments_public_lookup_idx
  on public.comments (project_key, created_at)
  where status = 'approved';

create table if not exists public.rate_limit_events (
  id uuid primary key default gen_random_uuid(),
  scope text not null,
  subject_hash text not null,
  created_at timestamptz not null default now(),
  constraint rate_limit_events_scope_check check (
    scope in ('comments', 'chat')
  ),
  constraint rate_limit_events_subject_hash_check check (
    char_length(subject_hash) = 64
  )
);

create index if not exists rate_limit_events_lookup_idx
  on public.rate_limit_events (scope, subject_hash, created_at desc);

alter table public.comments enable row level security;
alter table public.rate_limit_events enable row level security;

revoke all on table public.comments from anon, authenticated;
grant select on table public.comments to anon, authenticated;

revoke all on table public.rate_limit_events from anon, authenticated;

drop policy if exists "Approved comments are public" on public.comments;
create policy "Approved comments are public"
  on public.comments
  for select
  to anon, authenticated
  using (status = 'approved');

drop policy if exists "Visitors can submit pending comments" on public.comments;
