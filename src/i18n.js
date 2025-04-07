import i18next from "i18next";
import { initReactI18next } from "react-i18next";

i18next.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        main: "Main",
        product: "Product",
        contact: "Contact",
        landingHeader: "The entire startup ecosystem is in your hands.",
        landingText:
          "Startupera is an innovative mobile application that creates a unified digital ecosystem to connect startups, mentors, accelerators and investors",
        emailPlaceHolder: "Enter your email address...",
        landingButton: "Get early access",
        aboutHeader: "Key Features",
        abt1hd: "Select Your Role",
        abt1txt:
          "You can register as a startup, mentor, accelerator, or investor and have a personal profile through which you can connect with all members on the platform",
        abt2hd: "Explore The Community",
        abt2txt:
          "After creating your personal profile,you'll be able to explore georgian startups, mentors, accelerators, and investors, and access all the necessary and up-to-date information",
        abt3hd: "Book A Meeting",
        abt3txt:
          "You'll have the opportunity to book short meetings with the parties you're interested in and receive all the essential information needed to grow in your role within the ecosystem",
        teamHd: "Who we are",
        team1: "Tika Matsiashvili",
        team2: "Saba Shagidze",
        team3: "Zura Tsiklauri",
        team4: "Tornike Ramazashvili",
        footerTxt: "Startupera, All rights reserved.",
        emailReply1: "Invalid Format, Please enter a valid Email",
        emailReply2: "Email sent successfully",
        emailReply3: "Failed to send email",
      },
    },
    ge: {
      translation: {
        main: "მთავარი",
        product: "პროდუქტი",
        contact: "კონტაქტი",
        landingHeader: "მთლიანი სტარტაპ ეკოსისტემა შენს ხელებში",
        landingText:
          "სტარტაპერა არის ინოვაციური მობილური აპლიკაცია, რომელიც ქმნის ერთიან ციფრულ ეკოსისტემას სტარტაპების, მენტორების, აქსელერატორებისა და ინვესტორების დასაკავშირებლად",
        emailPlaceHolder: "ჩაწერე შენი ელ-ფოსტა...",
        landingButton: "ადრეული წვდომის მიღება",
        aboutHeader: "ძირითადი ფუნქციები",
        abt1hd: "აირჩიო როლი",
        abt1txt:
          " შეგიძლია დარეგისტრირდე როგორც სტარტაპერი, მენტორი, აქსელერატორი ან ინვესტორი, და გქონდეს პერსონალური პროფილი, რომლითაც პლატფორმაზე გაეცნობი ყველა წევრს",
        abt2hd: "გაეცნო მხარეებს",
        abt2txt:
          "პერსონალური პროფილის შექმნის შემდეგ, გაეცნობი ქართულ სტარტაპებს, მენტორებს, აქსელერაციებს, ინვესტორებს და მიიღებ ყველა საჭირო თუ აქტუალურ ინფორმაციას",
        abt3hd: "დაჯავშნო შეხვედრა",
        abt3txt:
          "საშუალება გექნება დაჯავშნო მოკლე შეხვედრა შენთვის სასურველ მხარესთან, და მიიღო ყველა საჭირო ინფორმაცია, რომელიც სჭირდება შენი როლის განვითარებას ეკოსისტემაში",
        teamHd: "ვინ ვართ ჩვენ",
        team1: "თიკა მაწიაშვილი",
        team2: "საბა შაგიძე",
        team3: "ზურა წიკლაური",
        team4: "თორნიკე რამაზაშვილი",
        footerTxt: "სტარტაპერა, ყველა უფლება დაცულია",
        emailReply1: "არავალიდური ფორმატი, გთხოვთ შეიყვანოთ ვალიდური ელ-ფოსტა",
        emailReply2: "ელ-ფოსტა წარმატებით გაიგზავნა",
        emailReply3: "ოპერაცია ვერ შესრულდა",
      },
    },
  },
  lng: "ge",
  fallbackLng: "ge",
  interpolation: {
    escapeValue: false,
  },
});

export default i18next;
