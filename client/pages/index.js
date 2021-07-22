const LandingPage = () => {
    console.log('I am suchka? ', pizda)
    return <h1>Landing page </h1>
}

LandingPage.getInitialProps = () => {
    console.log('I am on the server')

    return {pizda: true};
}

export default LandingPage
