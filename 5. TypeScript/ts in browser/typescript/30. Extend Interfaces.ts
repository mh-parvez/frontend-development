interface Mailable {
  send(email: string): boolean;
  queue(email: string): boolean;
}

interface FutureMailable extends Mailable {
  later(email: string, after: number): boolean;
}

const futureMailable: FutureMailable = {
  send(email: string): boolean {
    return true;
  },

  queue(email: string): boolean {
    return true;
  },

  later(email: string, after: number): boolean {
    return true;
  },
};

class Mail implements FutureMailable {
  later(email: string, after: number): boolean {
    console.log(`Send email to ${email} in ${after} ms.`);
    return true;
  }
  send(email: string): boolean {
    console.log(`Sent email to ${email} after 5854 ms. `);
    return true;
  }
  queue(email: string): boolean {
    console.log(`Queue an email to ${email}.`);
    return true;
  }
}

class Control {
  private state: boolean;
}

interface StatefulControl extends Control {
  enable(): void;
}

class Button extends Control implements StatefulControl {
  enable(): void {}
}

class TextBox extends Control implements StatefulControl {
  enable(): void {}
}

class Label extends Control {}

// class Chart implements StatefulControl {
//   enable(): void {}
// }
