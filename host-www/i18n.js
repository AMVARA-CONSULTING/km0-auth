(function () {
  'use strict';

  var STORAGE_KEY = 'km0-login-lang';
  var LOCALES = ['es', 'ca', 'en', 'de'];
  var DEFAULT_LOCALE = 'es';

  var strings = {
    es: {
      metaDescription: 'Inicio de sesión OpenCloud — Kilómetro 0 Digital',
      pageTitle: 'Kilómetro 0 Digital — OpenCloud',
      logoAlt: 'Kilómetro 0 Digital',
      langAria: 'Idioma',
      loginEyebrow: 'Kilómetro 0 Digital',
      loginSubtitle: 'Elige cómo quieres iniciar sesión en cloud.km0digital.com',
      continueGoogle: 'Continuar con Google',
      continueApple: 'Continuar con Apple',
      continueProvider: 'Iniciar sesión con {name}',
      footerTagline: 'Origen local. Impacto digital.',
      landingDescription:
        'Inicia sesión con Google o tu usuario.',
      landingCta: 'Continuar al inicio de sesión',
      landingCtaOidc: 'Continuar con Google',
      landingCtaLocal: 'Iniciar sesión con usuario y contraseña',
      landingTagline: 'Origen local · Impacto digital',
      landingDividerOr: 'o',
      ldapLoginIntro: 'Inicia sesión con tu usuario y contraseña de OpenCloud.',
      ldapUsernamePlaceholder: 'Usuario o correo',
      ldapPasswordLabel: 'Contraseña',
      ldapPasswordPlaceholder: 'Contraseña',
      ldapSubmit: 'Iniciar sesión',
      ldapLoginError: 'Usuario o contraseña incorrectos.',
      ldapErrorTitle: 'Problema al iniciar sesión',
      ldapOidcAccountTitle: 'Usa Google para esta cuenta',
      ldapOidcAccountError:
        'Esta cuenta se creó con Google. Inicia sesión con Google en lugar de usuario y contraseña.',
      ldapErrorGeneric:
        'No hemos podido iniciar sesión. Inténtalo de nuevo o usa otro método de acceso.',
      ldapBackLink: 'Volver al inicio de sesión',
      registerPageTitle: 'Crear cuenta — Kilómetro 0 Digital',
      registerMetaDescription: 'Registro en OpenCloud — Kilómetro 0 Digital',
      registerIntro: 'Crea tu cuenta con correo y contraseña para acceder a OpenCloud.',
      registerEmailLabel: 'Correo electrónico',
      registerEmailPlaceholder: 'tu@correo.com',
      registerUsernameLabel: 'Nombre de usuario',
      registerUsernamePlaceholder: 'p. ej. juan',
      registerMailboxPreviewEmpty: 'Tu buzón será usuario@km0digital.com',
      registerMailboxPreview: 'Tu buzón será {mailbox}',
      registerContactEmailLabel: 'Correo de contacto (opcional)',
      registerContactEmailPlaceholder: 'tu@gmail.com',
      registerContactEmailHint: 'Para recuperar tu cuenta. Puede ser tu Gmail u otro correo.',
      registerErrorUsername: 'Usuario no válido. Usa 3-32 caracteres: minúsculas, números, punto, guion o guion bajo.',
      registerErrorContactEmail: 'Introduce un correo de contacto válido.',
      registerPasswordLabel: 'Contraseña',
      registerPasswordPlaceholder: 'Contraseña',
      registerConfirmPasswordLabel: 'Confirmar contraseña',
      registerConfirmPasswordPlaceholder: 'Repite la contraseña',
      registerSubmit: 'Crear cuenta',
      registerSignInLink: '¿Ya tienes cuenta? Inicia sesión',
      registerCreateAccountLink: '¿Aún no tienes cuenta?',
      registerPricingNotice:
        'Este servicio está en fase de pruebas y es gratuito por ahora. Tras el periodo de pruebas, el almacenamiento en la nube costará <strong>1,99 €/mes</strong>. <a href="https://km0digital.com/pricing/" target="_blank" rel="noopener">Ver precios</a>',
      registerSuccessBanner: 'Cuenta creada. Inicia sesión con tu correo y contraseña.',
      registerErrorEmailInvalid: 'Introduce un correo electrónico válido.',
      registerErrorPasswordMismatch: 'Las contraseñas no coinciden.',
      registerErrorPasswordWeak: 'La contraseña debe tener al menos 8 caracteres e incluir un carácter especial.',
      registerErrorDuplicate: 'Este correo ya está registrado. Si la creaste con Google, usa «Continuar con Google» en la página de inicio de sesión.',
      registerErrorValidation: 'No se pudo validar los datos. Comprueba el correo y la contraseña.',
      registerErrorServiceUnavailable: 'El registro no está disponible temporalmente. Inténtalo más tarde o inicia sesión con Google.',
      registerErrorRateLimit: 'Demasiados intentos. Espera un minuto e inténtalo de nuevo.',
      registerErrorGeneric: 'No se pudo crear la cuenta. Inténtalo de nuevo más tarde.',
      registerSubmitting: 'Creando cuenta…',
      registerSigningIn: 'Iniciando sesión…',
      registerCreateMailLabel: 'Crear también una cuenta de KM0 Mail (@km0digital.com o dominio propio)',
      registerErrorFreemailMailbox: 'KM0 Mail no admite Gmail, Outlook u otros correos gratuitos como buzón. Usa @km0digital.com o tu dominio propio.',
      logoutPageTitle: 'Sesión cerrada — Kilómetro 0 Digital',
      logoutMetaDescription: 'Sesión cerrada en OpenCloud — Kilómetro 0 Digital',
      logoutTitle: 'Sesión cerrada',
      logoutMessage: 'Has cerrado sesión en OpenCloud correctamente.',
      logoutReturnLogin: 'Volver a iniciar sesión',
      logoutGoHome: 'Ir a km0digital.com',
      hubPageTitle: 'Kilómetro 0 Digital — KM0 Account',
      hubMetaDescription: 'Acceso unificado a los servicios KM0 — Kilómetro 0 Digital',
      hubTitle: 'KM0 Account',
      hubIntro: 'Elige un servicio o crea tu cuenta KM0.',
      hubServiceCloud: 'OpenCloud',
      hubServiceCloudDesc: 'Archivos y colaboración',
      hubServiceMail: 'KM0 Mail',
      hubServiceMailDesc: 'Correo web @km0digital.com',
      hubBackLink: 'Todos los servicios',
      hubRegisterIntro: 'Crea tu cuenta KM0 (OpenCloud + Mail).',
      hubLoginIntroMail: 'Inicia sesión con tu usuario y contraseña KM0.',
      hubLoginIntro: 'Inicia sesión una vez para todos los servicios KM0.',
      hubLoginHintCloud: 'Después de iniciar sesión te llevaremos a OpenCloud.',
      hubLoginHintMail: 'Después de iniciar sesión te llevaremos a KM0 Mail.',
      hubServiceGoToLabel: 'o ir directamente a',
      hubMailPasswordLink: 'O inicia sesión con contraseña del buzón (webmail)',
      hubLogoutMessage: 'Has cerrado sesión en los servicios KM0.',
      hubSignedOutBanner: 'Sesión cerrada correctamente. Puedes volver a iniciar sesión.',
      hubUnifiedLogin: 'Iniciar sesión en KM0',
      hubSsoContinueTitle: 'Continuar a KM0 Mail',
      hubSsoContinueMessage: 'Tu sesión en OpenCloud está activa. Elige cómo entrar al correo.',
      hubSsoContinueHonest:
        'Google (u otro IdP) es la identidad de Cloud. El correo web con OAuth usa la cuenta KM0 (LDAP) tras activar el buzón; también puedes entrar con la contraseña del buzón.',
      hubSsoContinueLdapOAuth: 'Abrir webmail (cuenta KM0)',
      hubSsoContinueActivate: 'Activar KM0 Mail',
      hubLoginActivateMail: 'Activar KM0 Mail (elegir usuario@km0digital.com)',
      hubLoginActivateMailHint:
        'Si iniciaste sesión con Google y aún no tienes buzón KM0, actívalo aquí. Después entra con la contraseña del buzón, confirma el correo de verificación en la bandeja (Google no abre el buzón) y, opcionalmente, con la cuenta KM0.',
    },
    ca: {
      metaDescription: "Inici de sessió OpenCloud — Kilòmetre 0 Digital",
      pageTitle: 'Kilòmetre 0 Digital — OpenCloud',
      logoAlt: 'Kilòmetre 0 Digital',
      langAria: 'Idioma',
      loginEyebrow: 'Kilòmetre 0 Digital',
      loginSubtitle: 'Tria com vols iniciar sessió a cloud.km0digital.com',
      continueGoogle: 'Continuar amb Google',
      continueApple: 'Continuar amb Apple',
      continueProvider: "Iniciar sessió amb {name}",
      footerTagline: 'Origen local. Impacte digital.',
      landingDescription:
        "Inicia sessió amb Google o el teu usuari.",
      landingCta: "Continuar a l'inici de sessió",
      landingCtaOidc: 'Continuar amb Google',
      landingCtaLocal: "Iniciar sessió amb usuari i contrasenya",
      landingTagline: 'Origen local · Impacte digital',
      landingDividerOr: 'o',
      ldapLoginIntro: "Inicia sessió amb el teu usuari i contrasenya d'OpenCloud.",
      ldapUsernamePlaceholder: 'Usuari o correu',
      ldapPasswordLabel: 'Contrasenya',
      ldapPasswordPlaceholder: 'Contrasenya',
      ldapSubmit: 'Iniciar sessió',
      ldapLoginError: 'Usuari o contrasenya incorrectes.',
      ldapErrorTitle: "Problema en iniciar sessió",
      ldapOidcAccountTitle: 'Fes servir Google per a aquest compte',
      ldapOidcAccountError:
        "Aquest compte es va crear amb Google. Inicia sessió amb Google en lloc d'usuari i contrasenya.",
      ldapErrorGeneric:
        "No hem pogut iniciar sessió. Torna-ho a provar o fes servir un altre mètode d'accés.",
      ldapBackLink: "Tornar a l'inici de sessió",
      registerPageTitle: 'Crear compte — Kilòmetre 0 Digital',
      registerMetaDescription: "Registre a OpenCloud — Kilòmetre 0 Digital",
      registerIntro: "Crea el teu compte amb correu i contrasenya per accedir a OpenCloud.",
      registerEmailLabel: 'Correu electrònic',
      registerEmailPlaceholder: 'tu@correu.com',
      registerUsernameLabel: "Nom d'usuari",
      registerUsernamePlaceholder: 'p. ex. joan',
      registerMailboxPreviewEmpty: 'La teva bústia serà usuari@km0digital.com',
      registerMailboxPreview: 'La teva bústia serà {mailbox}',
      registerContactEmailLabel: 'Correu de contacte (opcional)',
      registerContactEmailPlaceholder: 'tu@gmail.com',
      registerContactEmailHint: 'Per recuperar el teu compte. Pot ser el teu Gmail o un altre correu.',
      registerErrorUsername: "Usuari no vàlid. Usa 3-32 caràcters: minúscules, números, punt, guió o guió baix.",
      registerErrorContactEmail: 'Introdueix un correu de contacte vàlid.',
      registerPasswordLabel: 'Contrasenya',
      registerPasswordPlaceholder: 'Contrasenya',
      registerConfirmPasswordLabel: 'Confirmar contrasenya',
      registerConfirmPasswordPlaceholder: 'Repeteix la contrasenya',
      registerSubmit: 'Crear compte',
      registerSignInLink: 'Ja tens compte? Inicia sessió',
      registerCreateAccountLink: 'Encara no tens compte?',
      registerPricingNotice:
        'Aquest servei està en fase de proves i és gratuït per ara. Després del període de proves, l\'emmagatzematge al núvol costarà <strong>1,99 €/mes</strong>. <a href="https://km0digital.com/ca/pricing/" target="_blank" rel="noopener">Veure preus</a>',
      registerSuccessBanner: 'Compte creat. Inicia sessió amb el teu correu i contrasenya.',
      registerErrorEmailInvalid: 'Introdueix un correu electrònic vàlid.',
      registerErrorPasswordMismatch: 'Les contrasenyes no coincideixen.',
      registerErrorPasswordWeak: 'La contrasenya ha de tenir almenys 8 caràcters i incloure un caràcter especial.',
      registerErrorDuplicate: 'Aquest correu ja està registrat. Si el vas crear amb Google, fes servir «Continuar amb Google» a la pàgina d\'inici de sessió.',
      registerErrorValidation: 'No s\'han pogut validar les dades. Comprova el correu i la contrasenya.',
      registerErrorServiceUnavailable: 'El registre no està disponible temporalment. Torna-ho a provar més tard o inicia sessió amb Google.',
      registerErrorRateLimit: 'Massa intents. Espera un minut i torna-ho a provar.',
      registerErrorGeneric: 'No s\'ha pogut crear el compte. Torna-ho a provar més tard.',
      registerSubmitting: 'Creant compte…',
      registerSigningIn: 'Iniciant sessió…',
      registerCreateMailLabel: 'Crear també un compte de KM0 Mail (@km0digital.com o domini propi)',
      registerErrorFreemailMailbox: 'KM0 Mail no admet Gmail, Outlook ni altres correus gratuïts com a bústia. Fes servir @km0digital.com o el teu domini propi.',
      logoutPageTitle: 'Sessió tancada — Kilòmetre 0 Digital',
      logoutMetaDescription: "Sessió tancada a OpenCloud — Kilòmetre 0 Digital",
      logoutTitle: 'Sessió tancada',
      logoutMessage: "Has tancat sessió a OpenCloud correctament.",
      logoutReturnLogin: "Tornar a iniciar sessió",
      logoutGoHome: 'Anar a km0digital.com',
      hubPageTitle: 'Kilòmetre 0 Digital — KM0 Account',
      hubMetaDescription: "Accés unificat als serveis KM0 — Kilòmetre 0 Digital",
      hubTitle: 'KM0 Account',
      hubIntro: 'Tria un servei o crea el teu compte KM0.',
      hubServiceCloud: 'OpenCloud',
      hubServiceCloudDesc: 'Fitxers i col·laboració',
      hubServiceMail: 'KM0 Mail',
      hubServiceMailDesc: 'Correu web @km0digital.com',
      hubBackLink: 'Tots els serveis',
      hubRegisterIntro: 'Crea el teu compte KM0 (OpenCloud + Mail).',
      hubLoginIntroMail: "Inicia sessió amb el teu usuari i contrasenya KM0.",
      hubLoginIntro: 'Inicia sessió una vegada per a tots els serveis KM0.',
      hubLoginHintCloud: 'Després d\'iniciar sessió et portarem a OpenCloud.',
      hubLoginHintMail: 'Després d\'iniciar sessió et portarem a KM0 Mail.',
      hubServiceGoToLabel: 'o vés directament a',
      hubMailPasswordLink: 'O inicia sessió amb la contrasenya del buzó (webmail)',
      hubLogoutMessage: 'Has tancat sessió als serveis KM0.',
      hubSignedOutBanner: 'Sessió tancada correctament. Pots tornar a iniciar sessió.',
      hubUnifiedLogin: 'Iniciar sessió a KM0',
      hubSsoContinueTitle: 'Continuar a KM0 Mail',
      hubSsoContinueMessage: 'La teva sessió a OpenCloud està activa. Tria com entrar al correu.',
      hubSsoContinueHonest:
        'Google (o un altre IdP) és la identitat de Cloud. El correu web amb OAuth usa el compte KM0 (LDAP) després d\'activar la bústia; també pots entrar amb la contrasenya de la bústia.',
      hubSsoContinueLdapOAuth: 'Obrir webmail (compte KM0)',
      hubSsoContinueActivate: 'Activar KM0 Mail',
      hubLoginActivateMail: 'Activar KM0 Mail (triar usuari@km0digital.com)',
      hubLoginActivateMailHint:
        'Si has iniciat sessió amb Google i encara no tens bústia KM0, activa-la aquí. Després entra amb la contrasenya de la bústia, confirma el correu de verificació (Google no obre la bústia) i, opcionalment, amb el compte KM0.',
    },
    en: {
      metaDescription: 'OpenCloud sign-in — Kilometer 0 Digital',
      pageTitle: 'Kilometer 0 Digital — OpenCloud',
      logoAlt: 'Kilometer 0 Digital',
      langAria: 'Language',
      loginEyebrow: 'Kilometer 0 Digital',
      loginSubtitle: 'Choose how you want to sign in to cloud.km0digital.com',
      continueGoogle: 'Continue with Google',
      continueApple: 'Continue with Apple',
      continueProvider: 'Sign in with {name}',
      footerTagline: 'Local origin. Digital impact.',
      landingDescription:
        'Sign in with Google or your account.',
      landingCta: 'Continue to sign in',
      landingCtaOidc: 'Continue with Google',
      landingCtaLocal: 'Sign in with username and password',
      landingTagline: 'Local origin · Digital impact',
      landingDividerOr: 'or',
      ldapLoginIntro: 'Sign in with your OpenCloud username and password.',
      ldapUsernamePlaceholder: 'Username or email',
      ldapPasswordLabel: 'Password',
      ldapPasswordPlaceholder: 'Password',
      ldapSubmit: 'Sign in',
      ldapLoginError: 'Incorrect username or password.',
      ldapErrorTitle: 'Sign-in problem',
      ldapOidcAccountTitle: 'Use Google for this account',
      ldapOidcAccountError:
        'This account was created with Google. Sign in with Google instead of username and password.',
      ldapErrorGeneric:
        'We could not sign you in. Please try again or use another sign-in method.',
      ldapBackLink: 'Back to sign-in',
      registerPageTitle: 'Create account — Kilometer 0 Digital',
      registerMetaDescription: 'OpenCloud registration — Kilometer 0 Digital',
      registerIntro: 'Create your account with email and password to access OpenCloud.',
      registerEmailLabel: 'Email',
      registerEmailPlaceholder: 'you@example.com',
      registerUsernameLabel: 'Username',
      registerUsernamePlaceholder: 'e.g. john',
      registerMailboxPreviewEmpty: 'Your mailbox will be user@km0digital.com',
      registerMailboxPreview: 'Your mailbox will be {mailbox}',
      registerContactEmailLabel: 'Contact email (optional)',
      registerContactEmailPlaceholder: 'you@gmail.com',
      registerContactEmailHint: 'For account recovery. Can be your Gmail or any other email.',
      registerErrorUsername: 'Invalid username. Use 3-32 characters: lowercase, digits, dot, hyphen or underscore.',
      registerErrorContactEmail: 'Enter a valid contact email.',
      registerPasswordLabel: 'Password',
      registerPasswordPlaceholder: 'Password',
      registerConfirmPasswordLabel: 'Confirm password',
      registerConfirmPasswordPlaceholder: 'Repeat password',
      registerSubmit: 'Create account',
      registerSignInLink: 'Already have an account? Sign in',
      registerCreateAccountLink: "Don't have an account yet?",
      registerPricingNotice:
        'This service is currently in testing and free to try. After the testing period, cloud storage will be <strong>€1.99/month</strong>. <a href="https://km0digital.com/en/pricing/" target="_blank" rel="noopener">See pricing</a>',
      registerSuccessBanner: 'Account created. Sign in with your email and password.',
      registerErrorEmailInvalid: 'Enter a valid email address.',
      registerErrorPasswordMismatch: 'Passwords do not match.',
      registerErrorPasswordWeak: 'Password must be at least 8 characters and include a special character.',
      registerErrorDuplicate: 'This email is already registered. If you created it with Google, use "Continue with Google" on the sign-in page.',
      registerErrorValidation: 'Could not validate your details. Check your email and password.',
      registerErrorServiceUnavailable: 'Registration is temporarily unavailable. Try again later or sign in with Google.',
      registerErrorRateLimit: 'Too many attempts. Wait a minute and try again.',
      registerErrorGeneric: 'Could not create account. Please try again later.',
      registerSubmitting: 'Creating account…',
      registerSigningIn: 'Signing in…',
      registerCreateMailLabel: 'Also create a KM0 Mail account (@km0digital.com or your own domain)',
      registerErrorFreemailMailbox: 'KM0 Mail cannot use Gmail, Outlook, or other freemail domains as a mailbox. Use @km0digital.com or your own domain.',
      logoutPageTitle: 'Signed out — Kilometer 0 Digital',
      logoutMetaDescription: 'Signed out of OpenCloud — Kilometer 0 Digital',
      logoutTitle: 'Signed out',
      logoutMessage: 'You have been signed out of OpenCloud.',
      logoutReturnLogin: 'Return to sign in',
      logoutGoHome: 'Go to km0digital.com',
      hubPageTitle: 'Kilometer 0 Digital — KM0 Account',
      hubMetaDescription: 'Unified access to KM0 services — Kilometer 0 Digital',
      hubTitle: 'KM0 Account',
      hubIntro: 'Choose a service or create your KM0 account.',
      hubServiceCloud: 'OpenCloud',
      hubServiceCloudDesc: 'Files and collaboration',
      hubServiceMail: 'KM0 Mail',
      hubServiceMailDesc: 'Webmail @km0digital.com',
      hubBackLink: 'All services',
      hubRegisterIntro: 'Create your KM0 account (OpenCloud + Mail).',
      hubLoginIntroMail: 'Sign in with your KM0 username and password.',
      hubLoginIntro: 'Sign in once for all KM0 services.',
      hubLoginHintCloud: 'After signing in we will take you to OpenCloud.',
      hubLoginHintMail: 'After signing in we will take you to KM0 Mail.',
      hubServiceGoToLabel: 'or go straight to',
      hubMailPasswordLink: 'Or sign in with mailbox password (webmail)',
      hubLogoutMessage: 'You have signed out of KM0 services.',
      hubSignedOutBanner: 'You have been signed out. You can sign in again.',
      hubUnifiedLogin: 'Sign in to KM0',
      hubSsoContinueTitle: 'Continue to KM0 Mail',
      hubSsoContinueMessage: 'Your OpenCloud session is active. Choose how to open mail.',
      hubSsoContinueHonest:
        'Google (or another IdP) is your Cloud identity. Webmail OAuth uses your KM0 (LDAP) account after you activate a mailbox; you can also sign in with the mailbox password.',
      hubSsoContinueLdapOAuth: 'Open webmail (KM0 account)',
      hubSsoContinueActivate: 'Activate KM0 Mail',
      hubLoginActivateMail: 'Activate KM0 Mail (choose user@km0digital.com)',
      hubLoginActivateMailHint:
        'If you signed in with Google and do not have a KM0 mailbox yet, activate it here. Then sign in with the mailbox password, confirm the verification email in your inbox (Google cannot open the mailbox), and optionally your KM0 account.',
    },
    de: {
      metaDescription: 'OpenCloud-Anmeldung — Kilometer 0 Digital',
      pageTitle: 'Kilometer 0 Digital — OpenCloud',
      logoAlt: 'Kilometer 0 Digital',
      langAria: 'Sprache',
      loginEyebrow: 'Kilometer 0 Digital',
      loginSubtitle:
        'Wählen Sie, wie Sie sich bei cloud.km0digital.com anmelden möchten',
      continueGoogle: 'Mit Google fortfahren',
      continueApple: 'Mit Apple fortfahren',
      continueProvider: 'Mit {name} anmelden',
      footerTagline: 'Lokaler Ursprung. Digitale Wirkung.',
      landingDescription:
        'Melden Sie sich mit Google oder Ihrem Benutzerkonto an.',
      landingCta: 'Weiter zur Anmeldung',
      landingCtaOidc: 'Mit Google fortfahren',
      landingCtaLocal: 'Mit Benutzername und Passwort anmelden',
      landingTagline: 'Lokaler Ursprung · Digitale Wirkung',
      landingDividerOr: 'oder',
      ldapLoginIntro:
        'Melden Sie sich mit Ihrem OpenCloud-Benutzernamen und Passwort an.',
      ldapUsernamePlaceholder: 'Benutzername oder E-Mail',
      ldapPasswordLabel: 'Passwort',
      ldapPasswordPlaceholder: 'Passwort',
      ldapSubmit: 'Anmelden',
      ldapLoginError: 'Benutzername oder Passwort falsch.',
      ldapErrorTitle: 'Anmeldeproblem',
      ldapOidcAccountTitle: 'Google für dieses Konto verwenden',
      ldapOidcAccountError:
        'Dieses Konto wurde mit Google erstellt. Melden Sie sich mit Google statt Benutzername und Passwort an.',
      ldapErrorGeneric:
        'Anmeldung fehlgeschlagen. Bitte erneut versuchen oder eine andere Anmeldemethode wählen.',
      ldapBackLink: 'Zurück zur Anmeldung',
      registerPageTitle: 'Konto erstellen — Kilometer 0 Digital',
      registerMetaDescription: 'OpenCloud-Registrierung — Kilometer 0 Digital',
      registerIntro: 'Erstellen Sie Ihr Konto mit E-Mail und Passwort für OpenCloud.',
      registerEmailLabel: 'E-Mail',
      registerEmailPlaceholder: 'sie@beispiel.de',
      registerUsernameLabel: 'Benutzername',
      registerUsernamePlaceholder: 'z. B. johann',
      registerMailboxPreviewEmpty: 'Ihr Postfach wird benutzer@km0digital.com sein',
      registerMailboxPreview: 'Ihr Postfach wird {mailbox} sein',
      registerContactEmailLabel: 'Kontakt-E-Mail (optional)',
      registerContactEmailPlaceholder: 'sie@gmail.com',
      registerContactEmailHint: 'Zur Kontowiederherstellung. Kann Ihre Gmail oder eine andere E-Mail sein.',
      registerErrorUsername: 'Ungültiger Benutzername. 3-32 Zeichen: Kleinbuchstaben, Ziffern, Punkt, Bindestrich oder Unterstrich.',
      registerErrorContactEmail: 'Geben Sie eine gültige Kontakt-E-Mail ein.',
      registerPasswordLabel: 'Passwort',
      registerPasswordPlaceholder: 'Passwort',
      registerConfirmPasswordLabel: 'Passwort bestätigen',
      registerConfirmPasswordPlaceholder: 'Passwort wiederholen',
      registerSubmit: 'Konto erstellen',
      registerSignInLink: 'Bereits ein Konto? Anmelden',
      registerCreateAccountLink: 'Noch kein Konto?',
      registerPricingNotice:
        'Dieser Dienst befindet sich in der Testphase und ist derzeit kostenlos. Nach der Testphase kostet Cloud-Speicher <strong>1,99 €/Monat</strong>. <a href="https://km0digital.com/de/pricing/" target="_blank" rel="noopener">Preise ansehen</a>',
      registerSuccessBanner: 'Konto erstellt. Melden Sie sich mit E-Mail und Passwort an.',
      registerErrorEmailInvalid: 'Geben Sie eine gültige E-Mail-Adresse ein.',
      registerErrorPasswordMismatch: 'Passwörter stimmen nicht überein.',
      registerErrorPasswordWeak: 'Passwort muss mindestens 8 Zeichen und ein Sonderzeichen enthalten.',
      registerErrorDuplicate: 'Diese E-Mail ist bereits registriert. Wenn Sie das Konto mit Google erstellt haben, nutzen Sie auf der Anmeldeseite „Mit Google fortfahren“.',
      registerErrorValidation: 'Daten konnten nicht validiert werden. Prüfen Sie E-Mail und Passwort.',
      registerErrorServiceUnavailable: 'Registrierung vorübergehend nicht verfügbar. Später erneut versuchen oder mit Google anmelden.',
      registerErrorRateLimit: 'Zu viele Versuche. Eine Minute warten und erneut versuchen.',
      registerErrorGeneric: 'Konto konnte nicht erstellt werden. Bitte später erneut versuchen.',
      registerSubmitting: 'Konto wird erstellt…',
      registerSigningIn: 'Anmeldung läuft…',
      registerCreateMailLabel: 'Auch ein KM0-Mail-Konto erstellen (@km0digital.com oder eigene Domain)',
      registerErrorFreemailMailbox: 'KM0 Mail unterstützt Gmail, Outlook und andere Freemail-Domains nicht als Postfach. Nutze @km0digital.com oder deine eigene Domain.',
      logoutPageTitle: 'Abgemeldet — Kilometer 0 Digital',
      logoutMetaDescription: 'Abgemeldet von OpenCloud — Kilometer 0 Digital',
      logoutTitle: 'Abgemeldet',
      logoutMessage: 'Sie wurden von OpenCloud abgemeldet.',
      logoutReturnLogin: 'Zur Anmeldung zurück',
      logoutGoHome: 'Zu km0digital.com',
      hubPageTitle: 'Kilometer 0 Digital — KM0 Account',
      hubMetaDescription: 'Einheitlicher Zugang zu KM0-Diensten — Kilometer 0 Digital',
      hubTitle: 'KM0 Account',
      hubIntro: 'Wählen Sie einen Dienst oder erstellen Sie Ihr KM0-Konto.',
      hubServiceCloud: 'OpenCloud',
      hubServiceCloudDesc: 'Dateien und Zusammenarbeit',
      hubServiceMail: 'KM0 Mail',
      hubServiceMailDesc: 'Webmail @km0digital.com',
      hubBackLink: 'Alle Dienste',
      hubRegisterIntro: 'Erstellen Sie Ihr KM0-Konto (OpenCloud + Mail).',
      hubLoginIntroMail: 'Melden Sie sich mit KM0-Benutzername und Passwort an.',
      hubLoginIntro: 'Melden Sie sich einmal für alle KM0-Dienste an.',
      hubLoginHintCloud: 'Nach der Anmeldung leiten wir Sie zu OpenCloud.',
      hubLoginHintMail: 'Nach der Anmeldung leiten wir Sie zu KM0 Mail.',
      hubServiceGoToLabel: 'oder direkt zu',
      hubMailPasswordLink: 'Oder mit Postfachpasswort anmelden (Webmail)',
      hubLogoutMessage: 'Sie haben sich von KM0-Diensten abgemeldet.',
      hubSignedOutBanner: 'Sie wurden abgemeldet. Sie können sich erneut anmelden.',
      hubUnifiedLogin: 'Bei KM0 anmelden',
      hubSsoContinueTitle: 'Weiter zu KM0 Mail',
      hubSsoContinueMessage: 'Ihre OpenCloud-Sitzung ist aktiv. Wählen Sie, wie Sie die Mail öffnen.',
      hubSsoContinueHonest:
        'Google (oder ein anderer IdP) ist Ihre Cloud-Identität. Webmail-OAuth nutzt nach der Aktivierung Ihr KM0-(LDAP-)Konto; Sie können sich auch mit dem Postfachpasswort anmelden.',
      hubSsoContinueLdapOAuth: 'Webmail öffnen (KM0-Konto)',
      hubSsoContinueActivate: 'KM0 Mail aktivieren',
      hubLoginActivateMail: 'KM0 Mail aktivieren (user@km0digital.com wählen)',
      hubLoginActivateMailHint:
        'Wenn Sie sich mit Google angemeldet haben und noch kein KM0-Postfach haben, aktivieren Sie es hier. Danach mit Postfachpasswort anmelden, Bestätigungs-E-Mail im Postfach öffnen (Google öffnet das Postfach nicht) und optional mit KM0-Konto.',
    },
  };

  function htmlLang(locale) {
    return LOCALES.indexOf(locale) >= 0 ? locale : DEFAULT_LOCALE;
  }

  function normalizeLocale(raw) {
    if (!raw) return null;
    var code = String(raw).toLowerCase().split('-')[0];
    return LOCALES.indexOf(code) >= 0 ? code : null;
  }

  function detectBrowserLocale() {
    if (typeof navigator === 'undefined' || !navigator.language) return DEFAULT_LOCALE;
    var langs = navigator.languages || [navigator.language];
    for (var i = 0; i < langs.length; i++) {
      var loc = normalizeLocale(langs[i]);
      if (loc) return loc;
    }
    return DEFAULT_LOCALE;
  }

  function getLocale() {
    try {
      var params = new URLSearchParams(window.location.search);
      var fromQuery = normalizeLocale(params.get('lang'));
      if (fromQuery) {
        localStorage.setItem(STORAGE_KEY, fromQuery);
        return fromQuery;
      }
      var stored = normalizeLocale(localStorage.getItem(STORAGE_KEY));
      if (stored) return stored;
    } catch (e) {
      /* private mode / blocked storage */
    }
    return detectBrowserLocale();
  }

  function setLocale(locale) {
    try {
      localStorage.setItem(STORAGE_KEY, locale);
    } catch (e) {
      /* ignore */
    }
    applyLocale(locale);
    updateLangSwitcher(locale);
    document.documentElement.lang = htmlLang(locale);
  }

  function t(locale, key, vars) {
    var pack = strings[locale] || strings[DEFAULT_LOCALE];
    var text = pack[key] || strings[DEFAULT_LOCALE][key] || key;
    if (vars) {
      Object.keys(vars).forEach(function (name) {
        text = text.split('{' + name + '}').join(vars[name]);
      });
    }
    return text;
  }

  function applyLocale(locale) {
    var pack = strings[locale] || strings[DEFAULT_LOCALE];

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      var name = el.getAttribute('data-i18n-name');
      el.textContent = t(locale, key, name ? { name: name } : null);
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-placeholder');
      el.setAttribute('placeholder', t(locale, key));
    });

    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-html');
      el.innerHTML = t(locale, key);
    });

    document.querySelectorAll('[data-i18n-connector]').forEach(function (el) {
      var id = el.getAttribute('data-i18n-connector');
      if (id === 'google') el.textContent = pack.continueGoogle;
      else if (id === 'apple') el.textContent = pack.continueApple;
      else {
        var name = el.getAttribute('data-i18n-name') || id;
        el.textContent = t(locale, 'continueProvider', { name: name });
      }
    });

    var metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      var metaKey = metaDesc.getAttribute('data-i18n-meta') || 'metaDescription';
      metaDesc.setAttribute('content', t(locale, metaKey));
    }

    var titleEl = document.querySelector('title[data-i18n]');
    if (titleEl) {
      document.title = t(locale, titleEl.getAttribute('data-i18n'));
    } else {
      document.title = pack.pageTitle;
    }

    var logo = document.querySelector('.theme-navbar__logo, .km0-card__logo, .logo');
    if (logo) logo.setAttribute('alt', pack.logoAlt);

    var langNav = document.querySelector('.km0-lang-switch');
    if (langNav) langNav.setAttribute('aria-label', pack.langAria);
  }

  function updateLangSwitcher(locale) {
    document.querySelectorAll('.km0-lang-switch [data-lang]').forEach(function (btn) {
      var active = btn.getAttribute('data-lang') === locale;
      btn.classList.toggle('km0-lang-switch__btn--active', active);
      btn.setAttribute('aria-pressed', active ? 'true' : 'false');
    });
  }

  function bindLangSwitcher() {
    document.querySelectorAll('.km0-lang-switch [data-lang]').forEach(function (btn) {
      btn.addEventListener('click', function (ev) {
        ev.preventDefault();
        var locale = normalizeLocale(btn.getAttribute('data-lang'));
        if (locale) setLocale(locale);
      });
    });
  }

  function init() {
    var locale = getLocale();
    applyLocale(locale);
    updateLangSwitcher(locale);
    bindLangSwitcher();
    document.documentElement.lang = htmlLang(locale);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  window.KM0LoginI18n = {
    setLocale: setLocale,
    getLocale: getLocale,
    locales: LOCALES,
    t: function (key) { return t(getLocale(), key); },
  };
})();
