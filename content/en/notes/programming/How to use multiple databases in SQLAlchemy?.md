---
title: How to use multiple databases in SQLAlchemy?
created: 2023-08-09 23:33:00
updated: 2023-08-11 22:31:17
aliases:
  - How to use multiple databases in SQLAlchemy?
المعرفة: "[[Python]]"
share: true
cssclass: ltr
website: en/notes/programming
---

[[SQLAlchemy|SQLAlchemy]]  
الحالة:: #ملاحظة/مؤرشفة  
المراجع::

---

```python
# base
from sqlalchemy.orm import declarative_base

ContentBase = declarative_base()
BroadcastBase = declarative_base()

# session
from src.db.base import BroadcastBase, ContentBase

content_db_engine = create_engine(
    f"sqlite:///{CONTENT_DB_PATH}",
    connect_args={"check_same_thread": False},
    json_serializer=lambda obj: json.dumps(obj, ensure_ascii=False),
)
broadcast_db_engine = create_engine(
    f"sqlite:///{BROADCAST_DB_PATH}", connect_args={"check_same_thread": False}
)

ContentBase.metadata.create_all(bind=content_db_engine)
BroadcastBase.metadata.create_all(bind=broadcast_db_engine)

session = scoped_session(
    sessionmaker(
        autocommit=False,
        autoflush=False,
        binds={
            ContentBase: content_db_engine,
            BroadcastBase: broadcast_db_engine,
        },
    )
)

# model
from src.db.base import BroadcastBase

class Broadcast(BroadcastBase):
 …
```
