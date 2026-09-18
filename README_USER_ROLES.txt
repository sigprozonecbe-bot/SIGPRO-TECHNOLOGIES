SIGPRO USER & ROLE FIX

Replace BOTH index.html and sw.js in the GitHub repository.

USER WORKFLOW:
1. Firebase Console -> Authentication -> Users -> Add user.
2. Copy that person's Firebase Authentication UID.
3. In the SigPro app, log in as Owner/Boss.
4. Open Users & Roles.
5. Paste UID, enter Name/Email, choose role, Save/Update User.
6. The person uses the same SigPro URL with their own Firebase email/password.
7. Their role is loaded from company/users/<UID>.
