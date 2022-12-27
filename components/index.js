function Header() {
    return (
        <h1>Header</h1>
    )
}

function MainContent() {
    return (
        <p>Main Content</p>
    )
}


function Page() {
    return (
        <div>
            <Header />
            <MainContent />
        </div>
    )
}

ReactDOM.render(<Page />, document.getElementById('root'))