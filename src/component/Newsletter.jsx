const Newsletter = () => {
    return (
        <section class="newsletter" id="newsletter">
            <h2>Подпишитесь на <br />Рассылку</h2>
            <form action="">
                <input type="email" class="email" placeholder="Введите ваш почту" required />
                <input type="submit" value="Subscribe" class="btn" />
            </form>
        </section>
    );
}

export default Newsletter;