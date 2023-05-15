export const GlobalConfiguration: any = {

  buttonConfigInsertDiet: {
    buttonInsert: {
      text: 'Aggiungi',
      type: 'submit',
      styleInactive: {
        width: '98%',
        height: '29px',
        background: 'rgb(193,193,193)',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: '24px',
        fontFamily: 'Signika',
        fontStyle: 'normal',
        fontHeight: '600',
        fontSize: '17px',
        lineHeight: '31px',
        letterspacing: '0.05em',
        color: 'white'
      },
      styleActive: {
        width: '98%',
        height: '29px',
        background: '#91C788',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: '24px',
        fontFamily: 'Signika',
        fontStyle: 'normal',
        fontHeight: '600',
        fontSize: '17px',
        lineHeight: '31px',
        letterspacing: '0.05em',
        color: 'white'
      }
    }
  },

  creationDietConfig: {
    typeDate: 'date',
    typeNumber: 'number'
  },

  buttonDietConfig: {
    buttonUndo: {
      text: 'Annulla',
      type: 'reset',
      value: 'reset',
      style: {
        width: '156px',
        heigth: '72px',
        background: '#F4F4F4',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: '24px',
        fontFamily: 'Signika',
        fontStyle: 'normal',
        fontHeight: '600',
        fontSize: '25px',
        lineHeight: '31px',
        letterspacing: '0.05em',
        color: '#9C9C9C'
      }
    },
    buttonInsert: {
      text: 'Avanti',
      type: 'submit',
      styleInactive: {
        width: '156px',
        heigth: '72px',
        background: 'rgb(193,193,193)',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: '24px',
        fontFamily: 'Signika',
        fontStyle: 'normal',
        fontHeight: '600',
        fontSize: '25px',
        lineHeight: '31px',
        letterspacing: '0.05em',
        color: 'white'
      },
      styleActive: {
        width: '156px',
        heigth: '72px',
        background: '#91C788',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: '24px',
        fontFamily: 'Signika',
        fontStyle: 'normal',
        fontHeight: '600',
        fontSize: '25px',
        lineHeight: '31px',
        letterspacing: '0.05em',
        color: 'white'
      }
    }
  },

  footerButtonConfig: {
    link: 'Clicca qui!',
    text: {
      login: 'Password dimenticata?',
      registration: 'Hai già un account?',
      welcome: 'Non hai un account?'
    },
  },
  errorConfig: {
    required: 'Il campo è obbligatorio.',
    password: 'Immetti una password.',
    passwordMatch: 'Le password non coincide.'
  },

  registrationPage: {
    disabled: true,
    imgTitle: '../../../assets/Images/login/kcal_black.svg',
    imgFooter: '../../../assets/Images/login/ZUAMICA.svg',
    style: {
      height: '64px'
    },
    button: {
      text: 'Registrati',
      inactive: {
        background: 'gray',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: '24px',
        fontFamily: 'Signika',
        fontStyle: 'normal',
        fontHeight: '600',
        fontSize: '25px',
        lineHeight: '31px',
        letterspacing: '0.05em',
      },
      active: {
        background: '#91C788',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: '24px',
        fontFamily: 'Signika',
        fontStyle: 'normal',
        fontHeight: '600',
        fontSize: '25px',
        lineHeight: '31px',
        letterspacing: '0.05em',
      },
    },
    inputName: {
      type: 'text',
      placeholder: {
        text: 'Nome',
        style: {
          borderRadius: '24px',
          fontFamily: 'Signika',
          fontStyle: 'normal',
          fontHeight: '400',
          fontSize: '16px',
          lineHeight: '20px',
          letterSpacing: '-0.24px',
          color: 'black',
        }
      }
    },
    inputSurname: {
      type: 'text',
      placeholder: {
        text: 'Cognome',
        style: {
          borderRadius: '24px',
          fontFamily: 'Signika',
          fontStyle: 'normal',
          fontHeight: '400',
          fontSize: '16px',
          lineHeight: '20px',
          letterSpacing: '-0.24px',
          color: 'black',
        }
      }
    },
    inputEmail: {
      type: 'text',
      placeholder: {
        text: 'Email',
        style: {
          borderRadius: '24px',
          fontFamily: 'Signika',
          fontStyle: 'normal',
          fontHeight: '400',
          fontSize: '16px',
          lineHeight: '20px',
          letterSpacing: '-0.24px',
          color: 'black',
        }
      }
    },
    inputPassword: {
      type: 'password',
      placeholder: {
        text: 'Password',
        style: {
          borderRadius: '24px',
          fontFamily: 'Signika',
          fontStyle: 'normal',
          fontWeight: '400',
          fontSize: '16px',
          lineHeight: '20px',
          letterSpacing: '-0.24px',
          color: 'rgba(102, 102, 102, 0.4)',
        }
      }
    },
    inputConfirmPassword: {
      type: 'password',
      placeholder: {
        text: 'Conferma password',
        style: {
          borderRadius: '24px',
          fontFamily: 'Signika',
          fontStyle: 'normal',
          fontWeight: '400',
          fontSize: '16px',
          lineHeight: '20px',
          letterSpacing: '-0.24px',
          color: 'rgba(102, 102, 102, 0.4)',
        }
      }
    },
  },

  loginPage: {
    imgTitle: '../../../assets/Images/login/kcal_black.svg',
    imgFooter: '../../../assets/Images/login/ZUAMICA.svg',
    inputEmail: {
      type: 'text',
      placeholder: {
        text: 'Email',
        style: {
          borderRadius: '24px',
          fontFamily: 'Signika',
          fontStyle: 'normal',
          fontHeight: '400',
          fontSize: '16px',
          lineHeight: '20px',
          letterSpacing: '-0.24px',
          color: 'black',
        }
      }
    },
    inputPassword: {
      type: 'password',
      placeholder: {
        text: 'Password',
        style: {
          borderRadius: '24px',
          fontFamily: 'Signika',
          fontStyle: 'normal',
          fontWeight: '400',
          fontSize: '16px',
          lineHeight: '20px',
          letterSpacing: '-0.24px',
          color: 'rgba(102, 102, 102, 0.4)',
        }
      }
    },
    button: {
      text: 'Accedi',
      inactive: {
        background: 'gray',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: '24px',
        fontFamily: 'Signika',
        fontStyle: 'normal',
        fontHeight: '600',
        fontSize: '25px',
        lineHeight: '31px',
        letterspacing: '0.05em',
      },
      active: {
        background: '#91C788',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: '24px',
        fontFamily: 'Signika',
        fontStyle: 'normal',
        fontHeight: '600',
        fontSize: '25px',
        lineHeight: '31px',
        letterspacing: '0.05em',
      },
    },
  },

  diet: {
    dateStart: 1675590160000,
    timeCicle: 3,
    days: [
      {
        giorno: [
          {
            type: 1,
            image: '../../../assets/Images/diet/breakfast-svgrepo-com.svg',
            items: [
              {
                title: 'Albume',
                qta: 200,
                um: 'gr',
              },
              {
                title: "Farina d'avena",
                qta: 45,
                um: 'gr',
              },
            ],
          },
          {
            type: 2,
            image: '../../../assets/Images/diet/dried-fruits-snack-svgrepo-com.svg',
            items: [
              {
                title: 'Petto di tacchino',
                qta: 150,
                um: 'gr',
              },
              {
                title: 'Gallette di riso',
                qta: 35,
                um: 'gr',
              },
              {
                title: "Olio extravergine d'oliva",
                qta: 10,
                um: 'gr',
              },
            ],
          },
          {
            image: '../../../assets/Images/diet/Group 36213.svg',
            type: 3,
            items: [
              {
                title: 'Petto di pollo',
                qta: 150,
                um: 'gr',
              },
              {
                title: 'Cous Cous',
                qta: 45,
                um: 'gr',
              },
              {
                title: "Olio extravergine d'oliva",
                qta: 10,
                um: 'gr',
              },
            ],
          },
          {
            image: '../../../assets/Images/diet/chocolate-snack-svgrepo-com.svg',
            type: 4,
            items: [
              {
                title: 'Fiocchi di latte',
                qta: 1,
                um: 'Vasetto',
              },
              {
                title: 'Gallette di riso',
                qta: 35,
                um: 'gr',
              },
              {
                title: "Olio extravergine d'oliva",
                qta: 10,
                um: 'gr',
              },
            ],
          },
          {
            image: '../../../assets/Images/diet/damaged-lunch-box-svgrepo-com.svg',
            type: 5,
            items: [
              {
                image: '../../../assets/Images/diet/Group 36213.svg',
                title: 'Petto di pollo',
                qta: 150,
                um: 'gr',
              },
              {
                title: 'Cous Cous',
                qta: 45,
                um: 'gr',
              },
              {
                title: "Olio extravergine d'oliva",
                qta: 10,
                um: 'gr',
              },
            ],
          },
        ],
      },
      {
        giorno: [
          {
            type: 1,
            image: '../../../assets/Images/diet/breakfast-svgrepo-com.svg',
            items: [
              {
                title: 'Albume',
                qta: 200,
                um: 'gr',
              },
              {
                title: "Farina d'avena",
                qta: 30,
                um: 'gr',
              },
            ],
          },
          {
            image: '../../../assets/Images/diet/dried-fruits-snack-svgrepo-com.svg',
            type: 2,
            items: [
              {
                title: 'Petto di tacchino',
                qta: 150,
                um: 'gr',
              },
              {
                title: 'Gallette di riso',
                qta: 20,
                um: 'gr',
              },
              {
                title: "Olio extravergine d'oliva",
                qta: 10,
                um: 'gr',
              },
            ],
          },
          {
            image: '../../../assets/Images/diet/Group 36213.svg',
            type: 3,
            items: [
              {
                title: 'Petto di pollo',
                qta: 150,
                um: 'gr',
              },
              {
                title: 'Cous Cous',
                qta: 30,
                um: 'gr',
              },
              {
                title: "Olio extravergine d'oliva",
                qta: 10,
                um: 'gr',
              },
            ],
          },
          {
            image: '../../../assets/Images/diet/chocolate-snack-svgrepo-com.svg',
            type: 4,
            items: [
              {
                title: 'Fiocchi di latte',
                qta: 1,
                um: 'Vasetto',
              },
              {
                title: 'Gallette di riso',
                qta: 20,
                um: 'gr',
              },
              {
                title: "Olio extravergine d'oliva",
                qta: 10,
                um: 'gr',
              },
            ],
          },
          {
            image: '../../../assets/Images/diet/damaged-lunch-box-svgrepo-com.svg',
            type: 5,
            items: [
              {
                title: 'Petto di pollo',
                qta: 150,
                um: 'gr',
              },
              {
                title: 'Cous Cous',
                qta: 45,
                um: 'gr',
              },
              {
                title: "Olio extravergine d'oliva",
                qta: 10,
                um: 'gr',
              },
            ],
          },
        ],
      },
      {
        giorno: [
          {
            image: '../../../assets/Images/diet/breakfast-svgrepo-com.svg',
            type: 1,
            items: [
              {
                title: 'Albume',
                qta: 200,
                um: 'gr',
              },
              {
                title: "Farina d'avena",
                qta: 20,
                um: 'gr',
              },

            ],
          },
          {
            image: '../../../assets/Images/diet/dried-fruits-snack-svgrepo-com.svg',
            type: 2,
            items: [
              {
                title: 'Petto di tacchino',
                qta: 150,
                um: 'gr',
              },
              {
                title: 'Gallette di riso',
                qta: 35,
                um: 'gr',
              },
              {
                title: "Olio extravergine d'oliva",
                qta: 10,
                um: 'gr',
              },
            ],
          },
          {
            image: '../../../assets/Images/diet/Group 36213.svg',
            type: 3,
            items: [
              {
                title: 'Petto di pollo',
                qta: 150,
                um: 'gr',
              },
              {
                title: 'Cous Cous',
                qta: 30,
                um: 'gr',
              },
              {
                title: "Olio extravergine d'oliva",
                qta: 10,
                um: 'gr',
              },
            ],
          },
          {
            image: '../../../assets/Images/diet/chocolate-snack-svgrepo-com.svg',
            type: 4,
            items: [
              {
                title: 'Fiocchi di latte',
                qta: 1,
                um: 'Vaschetta',
              },
              {
                title: 'Gallette di riso',
                qta: 20,
                um: 'gr',
              },
              {
                title: "Olio extravergine d'oliva",
                qta: 10,
                um: 'gr',
              },
            ],
          },
          {
            image: '../../../assets/Images/diet/damaged-lunch-box-svgrepo-com.svg',
            type: 5,
            items: [
              {
                title: 'Petto di pollo',
                qta: 150,
                um: 'gr',
              },
              {
                title: 'Cous Cous',
                qta: 45,
                um: 'gr',
              },
              {
                title: "Olio extravergine d'oliva",
                qta: 10,
                um: 'gr',
              },
            ],
          },
        ],
      },
      {
        giorno: [
          {
            image: '../../../assets/Images/diet/breakfast-svgrepo-com.svg',
            type: 1,
            items: [
              {
                title: 'Albume',
                qta: 200,
                um: 'gr',
              },
              {
                title: "Farina d'avena",
                qta: 20,
                um: 'gr',
              },
            ],
          },
          {
            image: '../../../assets/Images/diet/dried-fruits-snack-svgrepo-com.svg',
            type: 2,
            items: [
              {
                title: 'Petto di tacchino',
                qta: 150,
                um: 'gr',
              },
              {
                title: 'Gallette di riso',
                qta: 30,
                um: 'gr',
              },
              {
                title: "Olio extravergine d'oliva",
                qta: 10,
                um: 'gr',
              },
            ],
          },
          {
            image: '../../../assets/Images/diet/Group 36213.svg',
            type: 3,
            items: [
              {
                title: 'Petto di pollo',
                qta: 150,
                um: 'gr',
              },
              {
                title: 'Cous Cous',
                qta: 20,
                um: 'gr',
              },
              {
                title: "Olio extravergine d'oliva",
                qta: 10,
                um: 'gr',
              },
            ],
          },
          {
            image: '../../../assets/Images/diet/chocolate-snack-svgrepo-com.svg',
            type: 4,
            items: [
              {
                title: 'Fiocchi di latte',
                qta: 1,
                um: 'Vasetto',
              },
              {
                title: 'Gallette di riso',
                qta: 20,
                um: 'gr',
              },
              {
                title: "Olio extravergine d'oliva",
                qta: 10,
                um: 'gr',
              },
            ],
          },
          {
            image: '../../../assets/Images/diet/chocolate-snack-svgrepo-com.svg',
            type: 5,
            items: [
              {
                title: 'Petto di pollo',
                qta: 150,
                um: 'gr',
              },
              {
                title: 'Cous Cous',
                qta: 30,
                um: 'gr',
              },
              {
                title: "Olio extravergine d'oliva",
                qta: 10,
                um: 'gr',
              },
            ],
          },
        ],
      },
    ],
  },

  switchDay: [
    {
      day: 'Oggi',
      active: true,
    },
    { day: 'Domani', active: false },
  ],

  profile: (context: any) => {
    return {
      title: 'Profile',
      img: '../../../assets/Images/profile/Ellipse 8.svg',
      name: 'Nazara Agalla',
      profession: 'DevOps',
      listProfile: [
        {
          icon: '../../../assets/Images/profile/iconList/Profile.svg',
          section: 'Modifica Profilo',
          arrow: '../../../assets/Images/profile/iconList/Arrow - Right.svg',
          callback: () => context.navigateToProfile()
        },
        {
          icon: '../../../assets/Images/profile/iconList/meal-svgrepo-com.svg',
          section: 'Modifica la tua dieta',
          arrow: '../../../assets/Images/profile/iconList/Arrow - Right.svg',
          callback: () => context.navigateToDiet()
        },
        {
          icon: '../../../assets/Images/profile/iconList/Setting.svg',
          section: 'Impostazioni',
          arrow: '../../../assets/Images/profile/iconList/Arrow - Right.svg',
          callback: () => context.navigateToSettings()
        },
        {
          icon: '../../../assets/Images/profile/iconList/Paper.svg',
          section: 'Privacy Policy & Termini',
          arrow: '../../../assets/Images/profile/iconList/Arrow - Right.svg',
          callback: () => context.navigateToPrivacyPolicy()
        },
        {
          icon: '../../../assets/Images/profile/iconList/Logout.svg',
          section: 'Log Out',
          arrow: '../../../assets/Images/profile/iconList/Arrow - Right.svg',
          callback: () => context.logout(context)
        },
      ],
    }
  },

  configCard: {
    card: [
      {
        style: {
          display: 'flex',
          flexDirection: 'column',
          width: '132px',
          height: '144px',
          background: '#fff2f0',
          borderRadius: '32px',
        },
        imgUrl: '../../../assets/Images/card/Group 9.svg',
        description: 'Frutta',
      },
      {
        style: {
          display: 'flex',
          flexDirection: 'column',
          width: '132px',
          height: '144px',
          background: '#fff2f0',
          borderRadius: '32px',
        },
        imgUrl: '../../../assets/Images/card/Group.svg',
        description: 'Verdura',
      },
      {
        style: {
          display: 'flex',
          flexDirection: 'column',
          width: '132px',
          height: '144px',
          background: '#fff2f0',
          borderRadius: '32px',
        },
        imgUrl: '../../../assets/Images/card/Group 10.svg',
        description: 'Pizza',
      },
    ],
  },

  buttonsWelcome: {
    title: 'Inizia',
    style: {
      background: '#91C788',
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      borderRadius: '24px',
      fontFamily: 'Signika',
      fontStyle: 'normal',
      fontHeight: '600',
      fontSize: '25px',
      lineHeight: '31px',
      letterspacing: '0.05em',
    },
  },

  buttons: {
    title: 'Vai',
    style: {
      display: 'flex',
      alignItems: 'center',
      width: '98px',
      height: '32px',
      background: '#FFFFFF',
      borderRadius: '8px',
      color: '#9E9BC7',
    },
    imgUrl: '../../../assets/Images/button/Arrow - Right 3.svg',
  },

  welcomeSlidesConfig: (context: any) => {
    return [
      {
        component: context.carouselItem,
        title: 'Mangia sano',
        imgUrl: '../../../assets/Images/Eating healthy food-cuate 1.svg',
        description:
          'Mantenere una buona salute dovrebbe essere la priorità per ognuno.',
      },
      {
        component: context.carouselItem,
        title: 'Ricette salutari',
        imgUrl: '../../../assets/Images/Cooking-cuate 1.svg',
        description:
          'Cerca tra centinaia di ricette salutari disponibili online',
      },
      {
        component: context.carouselItem,
        title: 'Tools',
        imgUrl: '../../../assets/Images/Mobile-cuate 1.svg',
        description:
          'Attraverso tools dedicati potrai tener traccia dei tuoi progressi!',
      },
    ];
  },

  homeSlidesConfig: (context: any) => {
    return [
      {
        component: context.carouselItem,
        title: 'ARTICLE',
        imgUrl: '../../../assets/Images/slider/Hamburger.svg',
        description: 'I pregi e i difetti dei fast food.',
        buttonDescription: 'Leggi ora',
        buttonImg: '../../../assets/Images/button/Arrow - Right 2.svg',
        style: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '32px',
          background: '#FF8473',
          borderRadius: '8px',
          transform: 'rotate(-0.01deg)',
          fontSize: '12px',
          color: 'white',
        },
      },
      {
        component: context.carouselItem,
        title: 'ARTICLE',
        imgUrl: '../../../assets/Images/slider/Hamburger.svg',
        description: 'I pregi e i difetti dei fast food.',
        buttonDescription: 'Leggi ora',
        buttonImg: '../../../assets/Images/button/Arrow - Right 2.svg',
        style: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '32px',
          background: '#FF8473',
          borderRadius: '8px',
          transform: 'rotate(-0.01deg)',
          fontSize: '12px',
          color: 'white',
        },
      },
      {
        component: context.carouselItem,
        title: 'ARTICLE',
        imgUrl: '../../../assets/Images/slider/Hamburger.svg',
        description: 'I pregi e i difetti dei fast food.',
        buttonDescription: 'Leggi ora',
        buttonImg: '../../../assets/Images/button/Arrow - Right 2.svg',
        style: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '104px',
          height: '32px',
          background: '#FF8473',
          borderRadius: '8px',
          transform: 'rotate(-0.01deg)',
          fontSize: '12px',
          color: 'white',
        },
      },
    ];
  },

  footerBar: [
    {
      path: 'search',
      imgUrl: '../../../assets/Images/footer/Search.svg',
      activeImgUrl: '../../../assets/Images/footer/Search_activated.svg',
    },
    {
      path: 'home',
      imgUrl: '../../../assets/Images/footer/Home.svg',
      activeImgUrl: '../../../assets/Images/footer/Home_activated.svg',
    },
    {
      path: 'profile',
      imgUrl: '../../../assets/Images/footer/Profile.svg ',
      activeImgUrl: '../../../assets/Images/footer/Profile_activated.svg',
    },
  ],

};