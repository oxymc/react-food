import { BackBtn } from '../components/BackBtn';

const Contacts = () => {
  return (
    <>
      <div className="row">
        <h1>Contacts</h1>
          <div class="foFlex">
            <p>Have a question? write me!</p>
            <a target="_blank" rel="noreferrer" href="https://t.me/skiff4ek">
              <img class="responsive-img" src="./telegram-brands.svg" alt="telegram" />
            </a>
            <a target="_blank" rel="noreferrer" href="https://join.skype.com/invite/zlgP7dBfnegd">
              <img class="responsive-img" src="./skype-brands.svg" alt="skype" />
            </a>
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/max-balagur/">
              <img class="responsive-img" src="./linkedin-brands.svg" alt="linkedin" />
            </a>
              <a target="_blank" rel="noreferrer" href="mailto:skiff4ek@gmail.com">
                <img class="responsive-img" src="./envelope-solid.svg" alt="email" />
              </a>
          </div>
      </div>
      <BackBtn />
    </>
  );
}

export {Contacts};