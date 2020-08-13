# mlaplanche Personal website

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=mlaplanche_personal-website&metric=alert_status)](https://sonarcloud.io/dashboard?id=mlaplanche_personal-website)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=mlaplanche_personal-website&metric=bugs)](https://sonarcloud.io/dashboard?id=mlaplanche_personal-website)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=mlaplanche_personal-website&metric=sqale_rating)](https://sonarcloud.io/dashboard?id=mlaplanche_personal-website)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=mlaplanche_personal-website&metric=security_rating)](https://sonarcloud.io/dashboard?id=mlaplanche_personal-website)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=mlaplanche_personal-website&metric=vulnerabilities)](https://sonarcloud.io/dashboard?id=mlaplanche_personal-website)

This is my personal website built using ReactJS and Bulma as the CSS framework.
It's based on jcoelho93's GitHub project.

The personal information on the website is populated from a json file that follows the [JSON Resume](https://jsonresume.org/) open source standard.

## Customizing it

Feel free to fork this project and update it with your own information and style. Just update the ´src/resume.json´ with your personal information.

If you improve the app in any way a PR would be very apreciated ;)

## Build

1. Clone the repo:
```console
> git clone https://gitlab.com/mlaplanche/personal-website.git
```

2. Update the *resume.json* with your personal information (check [JSON Resume](https://jsonresume.org/))

3. Install dependencies and run build command:
```console
> npm install
> npm run build
```

You can also test the app with a development server, just run:

```console
> npm start
```

## Contributing

Feel free to fork this project and customize with your personal info. If you implement any nice features or improvements I'd really appreciate if you could open a PR to this project ;)

## License

MIT
