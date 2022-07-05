/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    /**
     * **Logs into the Notes App with the possibility of caching the session.**
     *
     * @param username string - The email of the user you want to log in with
     * @param password string - The password of the user you want to log in with
     * @param options object - An object with the property `cacheSession` that can be `true` or `false` (default is `true`)
     *
     * @example cy.login() // Logs into the app using the default email and password (defined as envs), and caches the session
     * @example cy.login('user@email.com', 'S3cRe7P@ssW0rd') // Logs into the app using the provided credentials, and caches the session
     * @example cy.login(Cypress.env('USER_EMAIL'), Cypress.env('USER_PASSWORD'), { cacheSession: false }) // Logs into the app using email and password defined as envs, and does not cache the session
     */
    login(
      username?: string,
      password?: string,
      options?: object
    ): void | Cypress.Chainable<null>;

    /**
     * **Creates a new note with the possibility of attaching the `example.json` fixture file**.
     *
     * @param noteDescription string - The text of the note you want to create
     * @param attachFile boolean - A boolean (`true` or `false`) defining if you want or not to attach a file when creating the note (default is `false`)
     *
     * @example cy.createNewNote('Feed the cat') // Creates a note with the provided description
     * @example cy.createNewNote('Learn Cypress', true) // Creates a note with the provided description and attaches the `example.json` file to it
     */
    createNewNote(
      noteDescription: string,
      attachFile?: boolean
    ): Cypress.Chainable<undefined>;

    /**
     * **Edits an already existing note**.
     *
     * @param currentNoteDescription string - The text of the note you want to edit
     * @param newNoteDescription string - The new value for the note you want to edit
     * @param attachFile boolean - A boolean (`true` or `false`) defining if you want or not to attach a file when editing the note (default is `false`)
     *
     * @example cy.updateNote('Learn Cypress', 'Get more knowledge into Cypress') // Updates the description of note with the text 'Learn Cypress' to 'Get more knowledge into Cypress'
     * @example cy.updateNote('Learn Cypress', 'Get more knowledge into Cypress', true) // Updates the description of note with the text 'Learn Cypress' to 'Get more knowledge into Cypress' and attaches the `example.json` file to it
     */
    updateNote(
      currentNoteDescription: string,
      newNoteDescription: string,
      attachFile?: boolean
    ): Cypress.Chainable<undefined>;

    /**
     * **Deletes a note**.
     *
     * @param noteDescription string - The text of the note you want to delete
     *
     * @example cy.deleteNote('Feed the cat') // Deletes a note with the provided description
     */
    deleteNote(noteDescription: string): Cypress.Chainable<undefined>;

    /**
     * **Fills in the settings form with valid data and submits it**.
     *
     * @example cy.fillSettingsFormAndSubmit() // Visits the settings page, fills in the form, and submits it
     */
    fillSettingsFormAndSubmit(): Cypress.Chainable<JQuery<HTMLButtonElement>>;

    /**
     * **Fills in the signup form and submits it with the provided credentials**.
     *
     * @param email string - The email of a still not signed up user
     * @param password string - The password for the user being signed up
     *
     * @example cy.fillSignupFormAndSubmit('some-user@example.com', 'sEcR37-p@s5w0rD')
     */
    fillSignupFormAndSubmit(
      email: string,
      password: string
    ): Cypress.Chainable<JQuery<HTMLElement>>;
  }
}
