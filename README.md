# Super Test Form

 Demostration of basic stepper form implementation using React and Typescript.

## Technologies used

React
Typescript
Tailwind
react-hook-forms

## Setup

1. Clone the repository, navigate into folder and install the dependencies

```bash
   npm install 
```

2. Start application

```bash
npm run dev 
```

The application should start on `port:5173` by default. If not, copy the url from the console

##### Note: There is a known issue with vite for some versions of nodeJS, see [here](https://github.com/vitejs/vite/issues/14299). However it should run fine if using the current Node LTS version (v20.9.0 at present).

## Improvements

#### Testing

Yes testing - There are no tests. Fortunately the form is pretty simple and tests can easily be added using the suite or your choice. Since most of the components are very simple structuing components there would be little value in testing those, however the larger step sections can be tested using React Testing library or some other tool to verify proper flow of data through the expected channels upon user interaction.