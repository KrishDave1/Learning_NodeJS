let { people } = require("../data");

const getPeople = (req, res) => {
    res.status(200).json({
        success: true,
        data: people
    });
}

const createPerson = (req, res) => {
  const { name } = req.body;
  console.log(req.body);
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "please provide name value" });
  }
  res.status(201).json({ success: true, person: name });
};

const createPersonPostman = (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res
        .status(400)
        .json({ success: false, msg: "please provide name value" });
    }
    res.status(201).json({ success: true, data: [...people, name] });
}

const updatePerson = (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    const person = people.find((person) => person.id === parseInt(id));
    if (!person) {
        return res
        .status(404)
        .json({ success: false, msg: `person not found  with ${id}` });
    }
    const newPeople = people.map((person) => {
        if (person.id === parseInt(id)) {
            person.name = name; // THis changes the people array.
        }
        return person;
    });
    res.status(200).json({ success: true, data: newPeople });
}

const deletePerson = (req, res) => {
    const { id } = req.params;
    const person = people.find((person) => person.id === parseInt(id));
    if (!person) {
        return res
        .status(404)
        .json({ success: false, msg: `person not found  with ${id}` });
    }
    const newPeople = people.filter((person) => person.id !== parseInt(id));
    res.status(200).json({ success: true, data: newPeople });
}

module.exports = {
    getPeople,
    createPerson,
    createPersonPostman,
    updatePerson,
    deletePerson
}